import { FederalDistrict } from "../interfaces/federal-district.model";
import { Region } from "../interfaces/region.model";

export type FederalDistrictTransfer = FederalDistrict &
{
    regions?: Region[],
    toggled: boolean,
    checked: boolean
}