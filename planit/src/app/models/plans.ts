import { Activity } from "./activity";

export interface Plans {
    id: string;
    day_of_trip: number;
    day_activity: Activity[];
    night_activity: string;
    restaurant: string;
    category: string;
}