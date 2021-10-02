import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityTransfer } from 'src/app/models/types/city-transfer.type';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  @Input() cities: CityTransfer[];
  @Input() parrentChecked: boolean;

  @Output() deselect = new EventEmitter<boolean>();

  public checked(city: CityTransfer): void {
    city.checked = !city.checked;
  }

  public onDeselect(checked: boolean): void {
    if (checked === false) {
      this.deselect.emit(false);
      return;
    }

    const uncheckedItem = this.cities.find(city => city.checked === false);
    if (!uncheckedItem) {
      this.deselect.emit(true);
    }
  }
}
