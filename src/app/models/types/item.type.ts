import { CityTransfer } from "./city-transfer.type";
import { FederalDistrictTransfer } from "./federal-district-transfer.type";
import { RegionTransfer } from "./region-transfer.type";

export type Item = 
    | FederalDistrictTransfer
    | RegionTransfer
    | CityTransfer;