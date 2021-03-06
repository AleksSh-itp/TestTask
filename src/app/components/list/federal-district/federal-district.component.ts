import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { addItemToForm } from 'src/app/helpers/add-item-to-form.helper';
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
  @Input() federalDistrictControlName: string;
  @Input() regionControlName: string;
  @Input() cityControlName: string;

  private _federalDistrictsTransfer: FederalDistrictTransfer[];
  private _formControl: FormControl;

  get federalDistricts(): FederalDistrictTransfer[] {
    return this._federalDistrictsTransfer;
  }

  constructor(
    private _federalDistrictTransferService: FederalDistrictTransferService,
    private _regionTransferService: RegionTransferService
  ) { }

  public ngOnInit(): void {
    this._formControl = this.formGroup.get(this.federalDistrictControlName) as FormControl;
    this._federalDistrictsTransfer = this._federalDistrictTransferService.getAllFederalDistrics()
  }

  public loadRegion(district: FederalDistrictTransfer): void {
    if (district.regions == null) {
      district.regions = this._regionTransferService.getRegionsByFederalDistrictId(district.id)
    }
  }

  public toggle(district: FederalDistrictTransfer): void {
    district.toggled = !district.toggled;
  }

  public checked(district: FederalDistrictTransfer): void {
    district.checked = !district.checked;
    this.addFederalDistrictToForm(district);
    this.checkedChildren(district);
  }

  public checkedChildren(parrent: FederalDistrictTransfer): void {
    parrent.regions?.map(region => {
      if (region != null && !region.checked) {
        region.checked = parrent.checked;
      }
      return region;
    });
  }

  public deselected(district: FederalDistrictTransfer, state: boolean): void {
    district.checked = state;
    this.addFederalDistrictToForm(district);
  }

  private addFederalDistrictToForm(district: FederalDistrictTransfer): void {
    addItemToForm(this._formControl, district);
  }
}
