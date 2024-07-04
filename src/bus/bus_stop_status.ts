import { Bus } from "./bus";
import { BusStop} from "./bus_stop";

export class BusStopStatus {
    busStop: BusStop;
    arrivingBuses: Bus[];

    constructor(busStop: BusStop, arrivingBuses: Bus[]) {
        this.busStop = busStop;
        this.arrivingBuses = arrivingBuses;
    }
}