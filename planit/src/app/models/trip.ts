import { Plans } from "./plans";

export interface Trip {
    id: string;
    // We may have to make hotel import an array.
    hotel: string;
    destination: string;
    status: string;
    plans: Plans[];
}