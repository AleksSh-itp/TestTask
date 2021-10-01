import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private _cities: City[];

  constructor() { 
    this._cities = [];

    for (let i = 0; i < 30; i++) {
      const subjectId = Math.floor(Math.random() * 10);

      this._cities.push(
        { id: i++, name: `City ${i++}`, subjectId: subjectId}
      )
    }
  }

  public getAllCities(): City[] {
    return this._cities;
  }

  public getAllCitiesBySubjectId(subjectId: number): City[] {
    return this._cities
      .filter(city => city.subjectId === subjectId);
  }
}
