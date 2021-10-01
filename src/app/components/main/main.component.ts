import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  public formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formGroup = this._formBuilder.group({
      'federalDistrict': [null],
      'subject': [null],
      'city': [null],
    })
  }

  get federalDistrictControl(): FormControl {
    return this.formGroup.get('federalDistrict') as FormControl;
  }

  get subjectControl(): FormControl {
    return this.formGroup.get('subject') as FormControl;
  }

  get cityControl(): FormControl {
    return this.formGroup.get('city') as FormControl;
  }

  public toggle(): void {

  }
}
