import { Trip } from "./trip";

export interface User {
    id: string;
    username: string;
    password: string;
    fname: string;
    trip: Trip[];
}