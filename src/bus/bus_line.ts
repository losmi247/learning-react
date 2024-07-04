import {BusStop} from "./bus_stop";

export class BusRoute {
    originStop: BusStop;
    destinationStop: BusStop;

    constructor(originStop: BusStop, destinationStop: BusStop) {
        this.originStop = originStop;
        this.destinationStop = destinationStop;
    }
}

export class BusLine {
    lineName: string;
    inboundRoute: BusRoute;
    outboundRoute: BusRoute;

    constructor(lineName: string, inboundRoute: BusRoute, outboundRoute: BusRoute) {
        this.lineName = lineName;
        this.inboundRoute = inboundRoute;
        this.outboundRoute = outboundRoute;
    }
}