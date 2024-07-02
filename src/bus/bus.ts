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

    static parseBusJSON(busJSON: any) {
        console.log(busJSON);
        let expectedArrivalDate = new Date(busJSON['expectedArrival']);
        let currentDate = new Date(busJSON['timestamp']);
        let timeToArrival = (expectedArrivalDate.getTime() - currentDate.getTime()) / 60000;
        return new Bus(busJSON["vehicleID"], busJSON["lineName"], busJSON["destinationName"], Math.floor(timeToArrival));
    }
}
