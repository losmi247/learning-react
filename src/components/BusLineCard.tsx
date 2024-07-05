import Badge from 'react-bootstrap/Badge';
import Container from "react-bootstrap/Container";

import {BusLine} from "../bus/bus_line"

import './BusLineCard.scss';

interface BusLineCardProp {
    busLine: BusLine;
}

export const BusLineCard = ({busLine}: BusLineCardProp) => {

    return (
        <Container className="bus-line-card">
            <Badge className="line-badge">{busLine.lineName}</Badge>
            <p>
                {busLine.inboundRoute.originStop.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                     className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                </svg>
                {busLine.inboundRoute.destinationStop.name}
            </p>
        </Container>
    );
}
