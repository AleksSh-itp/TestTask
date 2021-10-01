import { Injectable } from '@angular/core';
import { City } from '../models/interfaces/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private _cities: City[];

  constructor() { 
    this._cities = [];

    for (let i = 0; i < 30; i++) {
      const regionId = Math.floor(Math.random() * 10);

      this._cities.push(
        { id: i+1, name: `City ${i+1}`, regionId: regionId}
      )
    }
  }

  public getAllCities(): City[] {
    return this._cities;
  }

  public getCityById(id: number): City {
    return this._cities.find(city => city.id === id);
  }

  public getAllCitiesByRegionId(regionId: number): City[] {
    return this._cities
      .filter(city => city.regionId === regionId);
  }
}
