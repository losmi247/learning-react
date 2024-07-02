import {BusStop} from "./bus_stop";

export class Location {
    public longitude: number;
    public latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public async getBusStopsNearLocation() {
        const response = await fetch(`https://api.tfl.gov.uk/StopPoint?stopTypes=NaptanPublicBusCoachTram&lat=${this.latitude}&lon=${this.longitude}&radius=100`)
        const data: any = await response.json();

        return (data["stopPoints"] as Array<any>).map((stopJSON) =>
            new BusStop(stopJSON["commonName"], stopJSON["id"], stopJSON['distance'])
        );
    }

    public static async getLocationFromPostcode(postcode: string) {
        const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
        const data: any = await response.json();

        return new Location(data["result"]["longitude"], data["result"]["latitude"]);
    }
}