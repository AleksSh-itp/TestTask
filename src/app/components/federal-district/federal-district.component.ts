import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FederalDistrictTransfer } from 'src/app/models/types/federal-district-transfer.type';
import { FederalDistrictTransferService } from 'src/app/services/federal-district-transfer.service';
import { RegionTransferService } from 'src/app/services/region-transfer.service';

@Component({
  selector: 'app-federal-district',
  templateUrl: './federal-district.component.html',
  styleUrls: ['./federal-district.component.scss']
})
export class FederalDistrictComponent implements OnInit {
  @Input() formGroup: FormGroup;

  private _federalDistrictsTransfer: FederalDistrictTransfer[];

  get federalDistricts(): FederalDistrictTransfer[] {
    return this._federalDistrictsTransfer;
  }

  constructor(
    private _federalDistrictTransferService: FederalDistrictTransferService,
    private _regionTransferService: RegionTransferService
  ) { }

  public ngOnInit(): void {
    this._federalDistrictsTransfer = this._federalDistrictTransferService.getAllFederalDistrics()
  }

  public loadRegion(district: FederalDistrictTransfer): void {
    if (district.regions == null) {
      district.regions = this._regionTransferService.getRegionsByFederalDistrictId(district.id)
    }
  }

  public expand(district: FederalDistrictTransfer): void {
    district.toggled = !district.toggled;
  }

  public checked(district: FederalDistrictTransfer): void {
    district.checked = !district.checked;
    this.checkedChildren(district);
  }

  public checkedChildren(parrent: FederalDistrictTransfer): void {
    parrent.regions?.map(region => {
      if (region != null) {
        region.checked = parrent.checked;
      }
      return region;
    });
  }

  public deselected(node: FederalDistrictTransfer, state: boolean): void {
    node.checked = state;
  }
}
