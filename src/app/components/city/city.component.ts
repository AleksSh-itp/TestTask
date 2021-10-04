import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { addItemToForm } from 'src/app/helpers/add-item-to-form.helper';
import { removeItemFromForm } from 'src/app/helpers/remove-item-from-form.helper';
import { CityTransfer } from 'src/app/models/types/city-transfer.type';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit, OnChanges {
  @Input() formGroup: FormGroup;
  @Input() cities: CityTransfer[];
  @Input() controlName: string;
  @Input() parrentChecked: boolean;

  @Output() deselect = new EventEmitter<boolean>();

  private _formControl: FormControl;

  public ngOnInit(): void {
    this._formControl = this.formGroup.get(this.controlName) as FormControl;
  }

  public ngOnChanges(): void {
    this.cities.forEach(city => {
      this.addCityToForm(city);
    })
  }

  public checked(city: CityTransfer): void {
    city.checked = !city.checked;
    this.addCityToForm(city);
  }

  public onDeselect(checked: boolean): void {
    if (!checked) {
      this.deselect.emit(false);
      return;
    }

    const uncheckedItem = this.cities.find(city => !city.checked);
    if (!uncheckedItem) {
      this.deselect.emit(true);
    }
  }

  private addCityToForm(city: CityTransfer): void {
    if (!this.parrentChecked) {
      addItemToForm(this._formControl, city);
    } else {
      this.cities.forEach(city => {
        removeItemFromForm(this._formControl, city);
      });
    }
  }
}
