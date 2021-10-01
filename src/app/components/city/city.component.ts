import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/interfaces/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() items: City[];

  private _cities: City[];

  get cities(): City[] {
    return this._cities;
  }

  public ngOnInit(): void {
    this._cities = this.items;
  }
}
