import React, {useState} from 'react';

import { Location } from "../bus/location";
import { BusBoard } from "../components/BusBoard";
import { BusStop } from "../bus/bus_stop";

import Spinner from 'react-bootstrap/Spinner';
import {NavigationBar} from "../components/NavigationBar";

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

export const BusArrivalLookup = () => {
  const [postcode, setPostcode] = useState<string>("");
  const [stops, setStops] = useState<BusStop[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    setIsLoading(true);
    setStops(await getBusStopsNearPostcode(postcode));
    setIsLoading(false);
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  return (
    <>
      <NavigationBar />
      <form action=""  onSubmit={ formHandler }>
        <label htmlFor="postcodeInput"> Enter the postcode:</label>
        <input type="text" id="postcodeInput" onChange={  updatePostcode }/>
        <input type="submit" value="Submit" disabled={isLoading}/>
      </form>
      {isLoading ?
          <div className="text-center">
            <Spinner animation="border" role="status" >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          <BusBoard stops={stops}/>
      }
    </>
  );
}