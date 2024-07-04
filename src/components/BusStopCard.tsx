import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';

import './BusStopCard.scss';

import {BusStopStatus} from "../bus/bus_stop_status";

interface BusStopCardProp {
    busStopStatus: BusStopStatus;
}

export const BusStopCard = ({busStopStatus}: BusStopCardProp) => {
    const arrivingBuses = busStopStatus.arrivingBuses.map(bus =>
        <tr className= "bus-list" key={ bus.vehicleID }>
            <td width="5%" align="center"> <Badge bg="secondary">{ bus.lineName }</Badge> </td>
            <td width="80%"> { bus.destinationName } </td>
            <td width="15%" align="center"> { bus.minutesToArrival } </td>
        </tr>
    );

    return (
        <div className = "bus-stop-card">
            <h3>{busStopStatus.busStop.name}</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col"> Line </th>
                        <th scope="col"> Destination </th>
                        <th scope="col"> Minutes </th>
                    </tr>
                </thead>
                <tbody>
                    { arrivingBuses }
                </tbody>
            </Table>
        </div>
    );
}
