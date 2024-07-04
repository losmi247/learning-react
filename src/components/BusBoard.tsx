import { BusStopCard } from "./BusStopCard";

import './BusBoard.scss';
import {BusStopStatus} from "../bus/bus_stop_status";

interface BusBoardProps {
    busStopStatuses: BusStopStatus[];
}

export const BusBoard = ({busStopStatuses}: BusBoardProps) => {
    const listItems = busStopStatuses.map(busStopStatus =>
        <li key={ busStopStatus.busStop.stopCode }>
            <BusStopCard busStopStatus={ busStopStatus }></BusStopCard>
        </li>
    );

    return (
        <div className="bus-board">
            <h2> Nearby Stops </h2>
            <ul> {listItems} </ul>
        </div>
    );
}
