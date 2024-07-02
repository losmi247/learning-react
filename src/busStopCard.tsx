import {BusStop} from "./bus_stop";
import {Bus} from "./bus";

interface BusStopCardProp {
    stop: BusStop;
}

export function BusStopCard ({stop}: BusStopCardProp) {

    const arrivingBuses = stop.arrivingBuses.map(bus =>
        <li key={bus.lineName}>
            {bus.lineName} : {bus.minutesToArrival}
        </li>
    );

    return (
        <>
            <h1> {stop.name}</h1>
            <ul>{arrivingBuses}</ul>
        </>

    );
}
