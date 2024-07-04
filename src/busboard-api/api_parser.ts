import {Bus} from "../bus/bus";
import {BusLine, BusRoute} from "../bus/bus_line";
import {BusStop} from "../bus/bus_stop";

export class ApiParser {
    public static parseBusJSON(busJSON: any) {
        const expectedArrivalDate = new Date(busJSON['expectedArrival']);
        const currentDate = new Date(busJSON['timestamp']);

        const timeToArrival = (expectedArrivalDate.getTime() - currentDate.getTime()) / (60 * 1000);

        return new Bus(busJSON["vehicleID"], busJSON["lineName"], busJSON["destinationName"], Math.floor(timeToArrival));
    }

    public static parseBusLineJSON(busLineJSON: any) {
        const inboundRoute = new BusRoute(
             new BusStop(busLineJSON["routeSections"][0]["originationName"], busLineJSON["routeSections"][0]["originator"]),
             new BusStop(busLineJSON["routeSections"][0]["destinationName"], busLineJSON["routeSections"][0]["destination"])
         );
        const outboundRound = new BusRoute(
             new BusStop(busLineJSON["routeSections"][0]["originationName"], busLineJSON["routeSections"][0]["originator"]),
             new BusStop(busLineJSON["routeSections"][0]["destinationName"], busLineJSON["routeSections"][0]["destination"])
         );
         return new BusLine(busLineJSON["id"], inboundRoute, outboundRound);
    }
}