import { Injectable } from '@angular/core';
import { FederalDistrict } from '../models/interfaces/federal-district.model';

@Injectable({
  providedIn: 'root'
})
export class FederalDistrictService {
  private _federalDistrics: FederalDistrict[];

  constructor() { 
    this._federalDistrics = [
      { id: 1, name: 'Federal district 1' },
      { id: 2, name: 'Federal district 2' },
      { id: 3, name: 'Federal district 3' },
    ]
  }

  public getAllFederalDistrics(): FederalDistrict[] {
    return this._federalDistrics;
  }

  public getFederalDistricById(id: number): FederalDistrict {
    return this._federalDistrics
      .find(federalDistrics => federalDistrics.id === id);
  }
}
