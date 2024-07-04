export class Bus {
    vehicleID: string;
    lineName: string;
    destinationName: string;
    minutesToArrival: number;

    constructor(vehicleID: string, lineName: string, destinationName: string,  minutesToArrival: number) {
        this.vehicleID = vehicleID;
        this.lineName = lineName;
        this.destinationName = destinationName;
        this.minutesToArrival = minutesToArrival;
    }
}
