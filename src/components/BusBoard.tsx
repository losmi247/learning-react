import { BusStop } from "../bus/bus_stop";
import { BusStopCard } from "./BusStopCard";

interface BusBoardProp {
    stops: BusStop[];
}

export const BusBoard = ({stops}: BusBoardProp) => {
    const listItems = stops.map(stop =>
        <li key={ stop.stopCode }>
            <BusStopCard stop={ stop }></BusStopCard>
        </li>
    );

    return (
        <div className="bus-board">
            <h2> Nearby Stops </h2>
            <ul> {listItems} </ul>
        </div>
    );
}
