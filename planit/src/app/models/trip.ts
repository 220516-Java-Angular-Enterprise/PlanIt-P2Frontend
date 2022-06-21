import { Plans } from "./plans";

export interface Trip {
    id: string;
    hotel: string;
    destination: string;
    status: string;
    plans: Plans[];
}