import { Injectable } from '@angular/core';
import { FederalDistrict } from '../models/federal-district.model';

@Injectable({
  providedIn: 'root'
})
export class FederalDistrictService {
  private _federalDistrics: FederalDistrict[];

  constructor() { 
    this._federalDistrics = [
      { id: 1, name: "Federal FederalDistrict 1" },
      { id: 2, name: "Federal FederalDistrict 2" },
      { id: 3, name: "Federal FederalDistrict 3" },
    ]
  }

  public getAllFederalDistrics(): FederalDistrict[] {
    return this._federalDistrics;
  }
}
