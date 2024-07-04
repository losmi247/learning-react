import { BusLineCard } from "./BusLineCard";

import './BusBoard.scss';
import {BusLine} from "../bus/bus_line";

interface BusLineBoardProps {
    busLines: BusLine[];
}

export const BusLineBoard = ({busLines}: BusLineBoardProps) => {
    const listItems = busLines.map(busLine =>
        <li key={ busLine.lineName }>
            <BusLineCard busLine={ busLine }></BusLineCard>
        </li>
    );

    return (
        <div className="bus-board">
            <h2> Nearby Stops </h2>
            <ul> {listItems} </ul>
        </div>
    );
}
