import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

import './BusLineCard.scss';

import {BusStopStatus} from "../bus/bus_stop_status";
import {BusLine} from "../bus/bus_line";

interface BusLineCardProp {
    busLine: BusLine;
}

export const BusLineCard = ({busLine}: BusLineCardProp) => {

    return (
        <p>{busLine.lineName}</p>
    );
}
