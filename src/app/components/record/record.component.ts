import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FederalDistrict } from 'src/app/models/interfaces/federal-district.model';
import { CityService } from 'src/app/services/city.service';
import { FederalDistrictService } from 'src/app/services/federal-district.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.sass']
})
export class RecordComponent implements OnInit {
  @Input() formGroup: FormGroup;
  
  private _federalDistricts: FederalDistrict[];

  public regionToggle = false;
  public cityToggle = false;

  get federalDistricts(): FederalDistrict[] {
    return this._federalDistricts;
  }

  constructor(
    private _federalDistrictService: FederalDistrictService,
    private _regionService: RegionService,
    private _cityService: CityService,
  ) {
  }

  public ngOnInit(): void {
    this._federalDistricts = this._federalDistrictService.getAllFederalDistrics();
  }

  public loadRegions(districtId: number): void {
    const regions = this._regionService.getSubjectsByFederalDistrictId(districtId);
    this._federalDistricts.find(district => district.id === districtId).regions = regions;
  }

  public loadCities(regionId: number): void {
    const cities = this._cityService.getAllCitiesByRegionId(regionId);
    
    this._federalDistricts
      .find(district => district.regions
        .find(region => region.id === regionId).cities = cities
      );
  }
}
