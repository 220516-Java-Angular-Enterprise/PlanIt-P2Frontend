import { Activity } from "./activity";

export interface Plans {
    id: string;
    day_of_trip: number;
    day_activity: Activity[];
    day_activity_id: string;
    night_activity: string;
    night_activity_id: string;
    restaurant: string;
    restrautant_id: string;
    category: string;
}