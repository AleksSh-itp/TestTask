import { Injectable } from '@angular/core';
import { Region } from '../models/interfaces/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private _regions: Region[];
  
  constructor() { 
    this._regions = [
      { id: 1, name: 'Subject 1', federalDistrictId: 1},
      { id: 2, name: 'Subject 2', federalDistrictId: 3},
      { id: 3, name: 'Subject 3', federalDistrictId: 1},
      { id: 4, name: 'Subject 4', federalDistrictId: 2},
      { id: 5, name: 'Subject 5', federalDistrictId: 2},
      { id: 6, name: 'Subject 6', federalDistrictId: 1},
      { id: 7, name: 'Subject 7', federalDistrictId: 3},
      { id: 8, name: 'Subject 8', federalDistrictId: 1},
      { id: 9, name: 'Subject 9', federalDistrictId: 2},
      { id: 10, name: 'Subject 10', federalDistrictId: 2},
    ]
  }

  public getAllSubjects(): Region[] {
    return this._regions
  }

  public getSubjectsByFederalDistrictId(federalDistrictId: number): Region[] {
    return this._regions
      .filter(region => region.federalDistrictId === federalDistrictId)
  }
}
