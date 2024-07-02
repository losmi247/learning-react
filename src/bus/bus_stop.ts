import {Bus} from "./bus";

export class BusStop {
    name: string;
    stopCode: string;
    distanceFromNearestPostcode: number;
    arrivingBuses: Bus[];

    constructor(name: string, stopCode: string, distance: number) {
        this.name = name;
        this.stopCode = stopCode;
        this.distanceFromNearestPostcode = distance;
        this.arrivingBuses = [];
    }

    public async getArrivingBuses() {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${this.stopCode}/Arrivals?app_key=8b617c3c28114b72ae60142e8d056399`);
        const data: any = await response.json();
        this.arrivingBuses = (data as Array<any>).map((busJSON) => Bus.parseBusJSON(busJSON))
            .sort((busA, busB) => busA.minutesToArrival - busB.minutesToArrival);
    }
}