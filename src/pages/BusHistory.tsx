import React, {useCallback, useEffect, useState} from 'react';
import * as BusBoardApi from "../busboard-api/bus_board_api";
import {BusStopCard} from "../components/BusStopCard";
import {BusLineCard} from "../components/BusLineCard";
import {BusBoard} from "../components/BusBoard";
import {BusLineBoard} from "../components/BusLineBoard";
import {BusStopStatus} from "../bus/bus_stop_status";
import {BusLine} from "../bus/bus_line";



export const BusHistory =  () => {
    const [busLines, setBusLines] = useState<BusLine[]>([]);

    const getBusLines = useCallback(async () => {
        setBusLines(await BusBoardApi.getBusLines());
    }, []);

    useEffect(() => {
        getBusLines();
    }, [getBusLines]);

    return (
        <>
            <BusLineBoard busLines={busLines} />
        </>
    );
}