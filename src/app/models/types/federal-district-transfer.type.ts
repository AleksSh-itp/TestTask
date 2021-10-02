import { FederalDistrict } from "../interfaces/federal-district.model";
import { Region } from "../interfaces/region.model";
import { RegionTransfer } from "./region-transfer.type";

export type FederalDistrictTransfer = FederalDistrict &
{
    regions?: RegionTransfer[],
    toggled: boolean,
    checked: boolean
}