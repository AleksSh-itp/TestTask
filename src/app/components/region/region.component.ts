import { Component, Input, OnInit } from '@angular/core';
import { Region } from 'src/app/models/interfaces/region.model';
import { RegionTransfer } from 'src/app/models/types/region-transfer.type';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  @Input() items: Region[];

  private _regionsTransfer: RegionTransfer[];

  get regions(): RegionTransfer[] {
    return this._regionsTransfer;
  }

  constructor(
    private _cityService: CityService
  ) { }

  public ngOnInit(): void {
    this._regionsTransfer = this.items
      .map(region => ({
        ...region,
        cities: null,
        toggled: false,
        checked: false
      }));
  }

  public loadCities(regionId: number): void {
    const region = this._regionsTransfer.find(region => region.id === regionId);

    if (region.cities == null) {
      region.cities = this._cityService.getAllCitiesByRegionId(regionId);
    }
  }

  public expand(regionId: number): void {
    const region = this._regionsTransfer
      .find(region => region.id === regionId);
    region.toggled = !region.toggled;
  }

  public getToggleState(regionId: number): boolean {
    return this._regionsTransfer
      .find(region => region.id === regionId).toggled;
  }

}
