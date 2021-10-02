import { Component, OnInit } from '@angular/core';
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
      .map(district => ({
        ...district,
        region: null,
        toggled: false,
        checked: false
      }));
  }

  public loadRegion(districtId: number): void {
    const district = this._federalDistrictsTransfer.find(district => district.id === districtId);

    if (district.regions == null) {
      district.regions = this._regionService.getRegionsByFederalDistrictId(districtId)
    }
  }

  public expand(districtId: number): void {
    const district = this._federalDistrictsTransfer
      .find(district => district.id === districtId);
    district.toggled = !district.toggled;
  }

  public getToggleState(districtId: number): boolean {
    return this._federalDistrictsTransfer
      .find(district => district.id === districtId)?.toggled;
  }
}
