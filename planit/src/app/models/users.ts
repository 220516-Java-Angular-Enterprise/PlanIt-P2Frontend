import { Trip } from "./trip";

export interface User {
    id: string;
    username: string;
    password: string;
    email?: string;
    trip: Trip[];
}