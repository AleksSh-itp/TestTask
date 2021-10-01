import { City } from "../interfaces/city.model";
import { Region } from "../interfaces/region.model";

export type RegionTransfer = Region & { cities?: City[] }