import React, {useCallback, useEffect, useState} from 'react';

import { BusBoardApi } from "../busboard-api/bus_board_api";
import { BusStopStatus } from "../bus/bus_stop_status";

import { ErrorBar } from "../components/ErrorBar";
import { BusBoard } from "../components/BusBoard";

import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form'
import InputGroup from "react-bootstrap/InputGroup";
import Button from 'react-bootstrap/Button'

const getBusStopStatusesNearPostcode = async (postcode: string) => {
    let location = await BusBoardApi.createLocation(postcode);
    let busStops = await BusBoardApi.getBusStopsNearLocation(location);


    return await Promise.all(
        busStops.map(async (busStop) =>
            new BusStopStatus(busStop, await BusBoardApi.getArrivingBuses(busStop.stopCode))
        )
    );
}

export const BusArrivalLookup = () => {
  const [postcode, setPostcode] = useState<string>("");
  const [busStopStatuses, setBusStopStatuses] = useState<BusStopStatus[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error|null>(null);

  const updateBusStatuses = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      setBusStopStatuses(await getBusStopStatusesNearPostcode(postcode));
    }
    catch (error: any) {
      setError(error);
    }

    setIsLoading(false);
  }, [postcode]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const submit = document.getElementById('submit') as HTMLElement;
      submit.click();
      //await updateBusStatuses();
    }, 30 * 1000);
    return () => clearInterval(interval);
  }, [updateBusStatuses]);

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    await updateBusStatuses();
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value);
  }

  return (
    <>
      <Form className="form" id="form" onSubmit={ formHandler }>
        <Form.Group className="form-group">
          <Form.Label className="form-label" htmlFor="postcodeInput"> Enter the postcode:</Form.Label>
          <InputGroup>
            <Form.Control onChange={ updatePostcode } type="text" required/>
            <Button className="form-button" type="submit" value="Submit"  id="submit" disabled={isLoading}>Submit</Button>
          </InputGroup>
        </Form.Group>
      </Form>
      {isLoading ?
          <div className="text-center">
            <Spinner animation="border" role="status" >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
          :
          (error === null) ? <BusBoard busStopStatuses={busStopStatuses}/> : <ErrorBar error={error} />
      }
    </>
  );
}