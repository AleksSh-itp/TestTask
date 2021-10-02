import { Injectable } from '@angular/core';
import { FederalDistrictTransfer } from '../models/types/federal-district-transfer.type';
import { FederalDistrictService } from './federal-district.service';

@Injectable({
  providedIn: 'root'
})
export class FederalDistrictTransferService {
  constructor(
    private _federalDistrictsService: FederalDistrictService
  ) {  }

  public getAllFederalDistrics(): FederalDistrictTransfer[] {
    return this._federalDistrictsService
      .getAllFederalDistrics()
      .map(district => ({
        ...district,
        regions: null,
        toggled: false,
        checked: false
      }));
  }
}
