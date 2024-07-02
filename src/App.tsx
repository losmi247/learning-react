import React, {useState} from 'react';
import {Location} from "./location";
import {BusStopCard} from "./busStopCard";
import {BusStopCardList} from "./busStopCardList";
import {BusStop} from "./bus_stop";
import {Bus} from "./bus";

async function getBuses(postcode: string): Promise<BusStop[]> {
  // very basic testing string, you'll likely return a list of strings or JSON objects instead!
  const postcodeString = (postcode === "") ? "" : ` - given postcode is ${postcode}`;
  const allStopsArrivals = await getStopArrivalsFromPostcode(postcode);
  return allStopsArrivals;
}

function App(): React.ReactElement {
  const [postcode, setPostcode] = useState<string>("");
  const [tableData, setTableData] = useState<string>("");
  const [stops, setStops] = useState<BusStop[]>([new BusStop("","",0)]);


  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    const data = await getBuses(postcode);
    console.log(data);
    setStops(data);
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  return <>
    <h1> BusBoard </h1>
    <form action="" onSubmit={formHandler}>
      <label htmlFor="postcodeInput"> Postcode: </label>
      <input type="text" id="postcodeInput" onChange={updatePostcode}/>
      <input type="submit" value="Submit"/>
    </form>
    <BusStopCardList stops={stops}/>;
    {/*{JSON.stringify(tableData, null, 4) /* this will just render the string - try creating a table 'dynamically'! *!/*/}
  </>;
}

const getStopArrivalsFromPostcode = async (postcode: string) => {
  let location = await Location.getLocationFromPostcode(postcode);
  let busStops = await location.getBusStopsNearLocation();

  let allStopsArrivals: BusStop[] = new Array(0);
  for(let busStop of busStops) {
    await busStop.getArrivingBuses();
    //allStopsArrivals.push({stop: busStop.name, arrivals: busStop.arrivingBuses });
    allStopsArrivals.push(busStop);
  }

  return allStopsArrivals;
}

export default App;