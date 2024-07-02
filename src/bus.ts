export class Bus {
    lineName: string;
    destinationName: string;
    minutesToArrival: number;

    constructor(lineName: string, destinationName: string,  minutesToArrival: number) {
        this.lineName = lineName;
        this.destinationName = destinationName;
        this.minutesToArrival = minutesToArrival;
    }

    static parseBusJSON = (busJSON: any) => {
        let expectedArrivalDate = new Date(busJSON['expectedArrival']);
        let currentDate = new Date(busJSON['timestamp']);
        let timeToArrival = (expectedArrivalDate.getTime() - currentDate.getTime()) / 60000;
        return new Bus(busJSON["lineName"], busJSON["destinationName"], Math.floor(timeToArrival));
    }
}
