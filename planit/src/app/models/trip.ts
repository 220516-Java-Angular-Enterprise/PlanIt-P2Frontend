import { Plans } from "./plans";

export interface Trip {
    id: string;
    // We may have to make hotel import an array.
    hotel: string;
    hotel_id: string;
    longitude: number;
    latitude:number;
    status: string;
    dayPlan_id: string;
    plans: Plans[];
}