import { Region } from "../interfaces/region.model";
import { CityTransfer } from "./city-transfer.type";

export type RegionTransfer = Region &
{
    cities?: CityTransfer[],
    toggled: boolean,
    checked: boolean,
}