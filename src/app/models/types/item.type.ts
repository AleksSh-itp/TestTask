import { City } from "../interfaces/city.model";
import { FederalDistrict } from "../interfaces/federal-district.model";
import { Region } from "../interfaces/region.model";
import { FederalDistrictTransfer } from "./federal-district-transfer.type";
import { RegionTransfer } from "./region-transfer.type";

export type Item =
    | FederalDistrict
    | FederalDistrictTransfer
    | Region
    | RegionTransfer
    | City;
