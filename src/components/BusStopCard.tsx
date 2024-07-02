import { BusStop } from "../bus/bus_stop";

interface BusStopCardProp {
    stop: BusStop;
}

export const BusStopCard = ({stop}: BusStopCardProp) => {
    const arrivingBuses = stop.arrivingBuses.map(bus =>
        <li key={ bus.vehicleID }>
            line <b>{ bus.lineName }</b> (destination: { bus.destinationName }) in <b>{ bus.minutesToArrival }</b> minutes
        </li>
    );

    return (
        <>
            <h3> { stop.name } </h3>
            <ul> { arrivingBuses } </ul>
        </>
    );
}
