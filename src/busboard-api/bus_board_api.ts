import {BusStop} from "../bus/bus_stop";
import {Location} from "../bus/location";

import {ApiParser} from "./api_parser";

interface BusStopDistance {
    busStop: BusStop;
    distance: number;
}

export async function getArrivingBuses(stopCode: string) {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals?app_key=8b617c3c28114b72ae60142e8d056399`);
    const data = await response.json() as any[];

    return data
        .map(ApiParser.parseBusJSON)
        .sort((busA, busB) => busA.minutesToArrival - busB.minutesToArrival);
}

export async function getBusStopsNearLocation(location: Location) {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&lat=${location.latitude}&lon=${location.longitude}&radius=100&app_key=8b617c3c28114b72ae60142e8d056399`)
    const data: any = await response.json();

    //let distances = (data["stopPoints"] as Array<any>).map((stopJSON) => stopJSON['distance']);

    console.log(data["stopPoints"])

    let busStops:BusStopDistance[] = (data["stopPoints"] as Array<any>).map((stopJSON) => {
            return {busStop: new BusStop(stopJSON["commonName"], stopJSON["id"]),
                distance: stopJSON["distance"]}
    }

    );
    return busStops.sort((busStopA, busStopB) =>
        busStopA.distance - busStopB.distance
    ).map((busStopDistance) => busStopDistance.busStop);
}

export async function createLocation(postcode: string) {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const data: any = await response.json();

    if(data["result"] === undefined) {
        throw new Error("Bad Postcode");
    }

    return new Location(data["result"]["longitude"], data["result"]["latitude"]);
}

export async function getBusLines() {
     const response =  await fetch(`https://api.tfl.gov.uk/Line/Mode/bus/Route?app_key=8b617c3c28114b72ae60142e8d056399`);
     const data = await response.json() as any[];

     return data.map(ApiParser.parseBusLineJSON);
}

