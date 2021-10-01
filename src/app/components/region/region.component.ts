import { Component, Input, OnInit } from '@angular/core';
import { Toggler } from 'src/app/Helpers/toggler.helper';
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
  private _toggler: Toggler;

  get regions(): RegionTransfer[] {
    return this._regionsTransfer;
  }

  constructor(
    private _cityService: CityService
  ) { }

  public ngOnInit(): void {
    this._regionsTransfer = this.items
      .map(region => ({...region, cities: null}));

    this._toggler = new Toggler(this._regionsTransfer);
  }

  public loadCities(regionId: number): void {
    const cities = this._cityService.getAllCitiesByRegionId(regionId);
    const region = this._regionsTransfer.find(region => region.id === regionId);

    region.cities = cities;
  }

  public expand(regionId: number): void {
    return this._toggler.expand(regionId);
  }

  public getToggleState(regionId: number): boolean {
    return this._toggler.getToggleState(regionId);
  }

}
