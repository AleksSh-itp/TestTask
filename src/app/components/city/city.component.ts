import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/models/interfaces/city.model';
import { CityTransfer } from 'src/app/models/types/city-transfer.type';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() items: City[];

  private _cities: CityTransfer[];

  get cities(): CityTransfer[] {
    return this._cities;
  }

  public ngOnInit(): void {
    this._cities = this.items
      .map(city => ({...city, checked: false}));
  }
}
