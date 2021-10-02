import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RegionTransfer } from 'src/app/models/types/region-transfer.type';
import { CityTransferService } from 'src/app/services/city-transfer.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnChanges {
  @Input() regions: RegionTransfer[];
  @Input() parrentChecked: boolean;

  @Output() deselect = new EventEmitter<boolean>();

  constructor(
    private _cityTransferService: CityTransferService
  ) { }

  public ngOnChanges(): void {
    this.regions.forEach(region => {
      this.checkedChildren(region);
    });    
  }

  public loadCities(region: RegionTransfer): void {
    if (region.cities == null) {
      region.cities = this._cityTransferService.getAllCitiesByRegionId(region.id);
    }
  }

  public expand(region: RegionTransfer): void {
    region.toggled = !region.toggled;
  }

  public checked(region: RegionTransfer): void {
    region.checked = !region.checked;
    this.checkedChildren(region);
  }

  public checkedChildren(parrent: RegionTransfer): void {
    parrent.cities?.map(city => {
      if (city != null && city.checked === false) {
        city.checked = parrent.checked;
      }
      return city;
    });
  }

  public deselected(node: RegionTransfer, state: boolean): void {
    node.checked = state;
    this.onDeselect(state);
  }

  public onDeselect(checked: boolean): void {
    if (checked === false) {
      this.deselect.emit(false);
      return;
    }

    const uncheckedItem = this.regions.find(region => region.checked === false);
    if (!uncheckedItem) {
      this.deselect.emit(true);
    }
  }
}
