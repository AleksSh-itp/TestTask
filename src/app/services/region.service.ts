import { Injectable } from '@angular/core';
import { Region } from '../models/interfaces/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private _regions: Region[];
  
  constructor() { 
    this._regions = [
      { id: 1, name: 'Region 1', federalDistrictId: 1},
      { id: 2, name: 'Region 2', federalDistrictId: 3},
      { id: 3, name: 'Region 3', federalDistrictId: 1},
      { id: 4, name: 'Region 4', federalDistrictId: 2},
      { id: 5, name: 'Region 5', federalDistrictId: 2},
      { id: 6, name: 'Region 6', federalDistrictId: 1},
      { id: 7, name: 'Region 7', federalDistrictId: 3},
      { id: 8, name: 'Region 8', federalDistrictId: 1},
      { id: 9, name: 'Region 9', federalDistrictId: 2},
      { id: 10, name: 'Region 10', federalDistrictId: 2},
    ]
  }

  public getAllRegions(): Region[] {
    return this._regions
  }

  public getRegionsByFederalDistrictId(federalDistrictId: number): Region[] {
    return this._regions
      .filter(region => region.federalDistrictId === federalDistrictId)
  }
}
