import { Injectable } from '@angular/core';
import { RegionTransfer } from '../models/types/region-transfer.type';
import { RegionService } from './region.service';

@Injectable({
  providedIn: 'root'
})
export class RegionTransferService {
  constructor(
    private _regionService: RegionService
  ) { }

  public getAllRegions(): RegionTransfer[] {
    return this._regionService
      .getAllRegions()
      .map(region => ({
        ...region,
        regions: null,
        toggled: false,
        checked: false
      }));
  }

  public getRegionsByFederalDistrictId(districtId: number): RegionTransfer[] {
    return this._regionService
      .getRegionsByFederalDistrictId(districtId)
      .map(region => ({
        ...region,
        regions: null,
        toggled: false,
        checked: false
      }));
  }
}
