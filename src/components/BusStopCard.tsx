import { BusStop } from "../bus/bus_stop";
import Badge from 'react-bootstrap/Badge';

import Table from 'react-bootstrap/Table';

import './BusStopCard.scss';

interface BusStopCardProp {
    stop: BusStop;
}

export const BusStopCard = ({stop}: BusStopCardProp) => {
    const arrivingBuses = stop.arrivingBuses.map(bus =>
        <tr className= "bus-list" key={ bus.vehicleID }>
            <td width="5%" align="center"> <Badge bg="secondary">{ bus.lineName }</Badge> </td>
            <td width="80%"> { bus.destinationName } </td>
            <td width="15%" align="center"> { bus.minutesToArrival } </td>
        </tr>
    );

    return (
        <div className = "bus-stop-card">
            <h3>{stop.name}</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col"> Bus Line </th>
                        <th scope="col"> Destination </th>
                        <th scope="col"> Minutes to Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    { arrivingBuses }
                </tbody>
            </Table>
        </div>
    );
}
