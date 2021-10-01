import { City } from "../interfaces/city.model";
import { FederalDistrict } from "../interfaces/federal-district.model";
import { Region } from "../interfaces/region.model";

export type InputNode = (
  | FederalDistrict
  | Region
  | City
);