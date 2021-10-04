import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { addItemToForm } from 'src/app/helpers/add-item-to-form.helper';
import { removeItemFromForm } from 'src/app/helpers/remove-item-from-form.helper';
import { RegionTransfer } from 'src/app/models/types/region-transfer.type';
import { CityTransferService } from 'src/app/services/city-transfer.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit, OnChanges {
  @Input() formGroup: FormGroup;
  @Input() regions: RegionTransfer[];
  @Input() controlName: string;
  @Input() parrentChecked: boolean;

  @Output() deselect = new EventEmitter<boolean>();

  private _formControl: FormControl;

  constructor(
    private _cityTransferService: CityTransferService
  ) { }

  public ngOnInit(): void {
    this._formControl = this.formGroup.get(this.controlName) as FormControl;
  }

  public ngOnChanges(): void {
    this.regions?.forEach(region => {
      this.checkedChildren(region);
      this.addRegionToForm(region);
    });
  }

  public loadCities(region: RegionTransfer): void {
    if (region.cities == null) {
      region.cities = this._cityTransferService.getAllCitiesByRegionId(region.id);
    }
  }

  public toggle(region: RegionTransfer): void {
    region.toggled = !region.toggled;
  }

  public checked(region: RegionTransfer): void {
    region.checked = !region.checked;
    this.addRegionToForm(region);
    this.checkedChildren(region);
  }

  public checkedChildren(parrent: RegionTransfer): void {
    if (parrent.checked) {
      parrent.cities?.map(city => {
        city.checked = parrent.checked;
        return city;
      });
    } else {
      const partialChecked = parrent.cities?.filter(city => city.checked === false) || [];
      if (partialChecked.length === 0) {
        parrent.cities?.map(city => city.checked = false);
      }
    }
  }

  public deselected(region: RegionTransfer, state: boolean): void {
    region.checked = state;
    this.addRegionToForm(region);
    this.onDeselect(state);
  }

  public onDeselect(checked: boolean): void {
    if (!checked) {
      this.deselect.emit(false);
      return;
    }

    const uncheckedItem = this.regions.find(region => !region.checked);
    if (!uncheckedItem) {
      this.deselect.emit(true);
    }
  }

  private addRegionToForm(region: RegionTransfer): void {
    if (!this.parrentChecked) {
      addItemToForm(this._formControl, region);
    } else {
      this.regions.forEach(region => {
        removeItemFromForm(this._formControl, region);
      });
    }
  }
}
