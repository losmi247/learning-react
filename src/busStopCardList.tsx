import {BusStop} from "./bus_stop";
import {BusStopCard} from "./busStopCard";

interface BusStopCardListProp {
    stops: BusStop[];
}

export function BusStopCardList ({stops}: BusStopCardListProp) {

    const listItems = stops.map(stop =>
        <li key={stop.stopCode}>
            <BusStopCard stop={stop}></BusStopCard>
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
