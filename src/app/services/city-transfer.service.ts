import { Injectable } from '@angular/core';
import { CityTransfer } from '../models/types/city-transfer.type';
import { CityService } from './city.service';

@Injectable({
  providedIn: 'root'
})
export class CityTransferService {
  constructor(
    private _cityService: CityService
  ) { }

  public getAllCities(): CityTransfer[] {
    return this._cityService
      .getAllCities()
      .map(city => ({
        ...city,
        checked: false
      }));
  }
  
  public getAllCitiesByRegionId(regionId: number): CityTransfer[] {
    return this._cityService
      .getAllCitiesByRegionId(regionId)
      .map(city => ({
        ...city,
        checked: false
      }));
  }
}
