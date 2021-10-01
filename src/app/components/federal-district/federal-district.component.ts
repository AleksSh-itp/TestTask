import { Component, OnInit } from '@angular/core';
import { Toggler } from 'src/app/Helpers/toggler.helper';
import { FederalDistrictTransfer } from 'src/app/models/types/federal-district-transfer.type';
import { FederalDistrictService } from 'src/app/services/federal-district.service';
import { RegionService } from 'src/app/services/region.service';

@Component({
  selector: 'app-federal-district',
  templateUrl: './federal-district.component.html',
  styleUrls: ['./federal-district.component.scss']
})
export class FederalDistrictComponent implements OnInit {
  private _federalDistrictsTransfer: FederalDistrictTransfer[];
  private _toggler: Toggler;

  get federalDistricts(): FederalDistrictTransfer[] {
    return this._federalDistrictsTransfer;
  }

  constructor(
    private _federalDistrictService: FederalDistrictService,
    private _regionService: RegionService
  ) { }

  public ngOnInit(): void {
    this._federalDistrictsTransfer = this._federalDistrictService
      .getAllFederalDistrics()
      .map(district => ({ ...district, region: null }));

    this._toggler = new Toggler(this._federalDistrictsTransfer);
  }

  public loadRegion(districtId: number): void {
    const regions = this._regionService.getRegionsByFederalDistrictId(districtId);
    const district = this._federalDistrictsTransfer.find(district => district.id === districtId);

    district.regions = regions;
  }

  public expand(districtId: number): void {
    this._toggler.expand(districtId);
  }

  public getToggleState(districtId: number): boolean {
    return this._toggler.getToggleState(districtId);
  }
}
