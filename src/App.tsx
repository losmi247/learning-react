import React, {useState} from 'react';

import { Location } from "./bus/location";
import { BusBoard } from "./components/BusBoard";
import { BusStop } from "./bus/bus_stop";

const getBusStopsNearPostcode = async (postcode: string) => {
  if(postcode === ""){
    return [];
  }
  else{
    let location = await Location.createLocation(postcode);
    let busStops = await location.getNearbyBusStops();

    let stops = new Array(0);
    for(let busStop of busStops) {
      await busStop.getArrivingBuses();
      stops.push(busStop);
    }

    return stops;
  }
}

function App(): React.ReactElement {
  const [postcode, setPostcode] = useState<string>("");
  const [stops, setStops] = useState<BusStop[]>([]);
  const [showLoading, setShowLoading] = useState(false)

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    setShowLoading(true);
    setStops(await getBusStopsNearPostcode(postcode));
    setShowLoading(false);
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  return (
    <>
      <h1> BusBoard </h1>
      <form action="" style={{textAlign: "left"}} onSubmit={ formHandler }>
        <label htmlFor="postcodeInput"> Enter the {<b>postcode</b>}: </label>
        <input type="text" id="postcodeInput" onChange={  updatePostcode }/>
        <input type="submit" value="Submit"/>
      </form>
      <div style={{textAlign: "center"}}>
        { showLoading ?
            <h1>Loading...</h1>
            :
            <BusBoard stops={ stops }/>
        }
      </div>
    </>
  );
}

export default App;