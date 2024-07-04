import {BusStop} from "../bus/bus_stop";
import {Location} from "../bus/location";

import {ApiParser} from "./api_parser";

export class BusBoardApi {
    public static async getArrivingBuses(stopCode: string) {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals?app_key=8b617c3c28114b72ae60142e8d056399`);
        const data = await response.json() as any[];

        return data
            .map(ApiParser.parseBusJSON)
            .sort((busA, busB) => busA.minutesToArrival - busB.minutesToArrival);
    }

    public static async getBusStopsNearLocation(location: Location) {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&lat=${location.latitude}&lon=${location.longitude}&radius=100&app_key=8b617c3c28114b72ae60142e8d056399`)
        const data: any = await response.json();

        //let distances = (data["stopPoints"] as Array<any>).map((stopJSON) => stopJSON['distance']);

        let busStops = (data["stopPoints"] as Array<any>).map((stopJSON) =>
            new BusStop(stopJSON["commonName"], stopJSON["id"])
        );
        return busStops;
    }

    public static async createLocation(postcode: string) {
        const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
        const data: any = await response.json();

        if(data["result"] === undefined) {
            throw new Error("Bad Postcode");
        }

        return new Location(data["result"]["longitude"], data["result"]["latitude"]);
    }

    public static async getBusLines() {
         const response =  await fetch(`https://api.tfl.gov.uk/Line/Mode/bus/Route&app_key=8b617c3c28114b72ae60142e8d056399`);
         const data = await response.json() as any[];

         return data.map(ApiParser.parseBusLineJSON);
    }
}