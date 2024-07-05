import { BusLineCard } from "./BusLineCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './BusLineBoard.scss';
import {BusLine} from "../bus/bus_line";

interface BusLineBoardProps {
    busLines: BusLine[];
}

export const BusLineBoard = ({busLines}: BusLineBoardProps) => {
    const listItems = busLines.map(busLine =>
            <Col xs={true}><BusLineCard busLine={ busLine }></BusLineCard></Col>
    );

    return (
        <div className="bus-line-board">
            <h2> All Bus Lines </h2>
            <Row> {listItems} </Row>
        </div>
    );
}
