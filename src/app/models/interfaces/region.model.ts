import { City } from "./city.model";

export interface Region {
    id: number;
    name: string;
    federalDistrictId: number;
    cities?: City[];
}