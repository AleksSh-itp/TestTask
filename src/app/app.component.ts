import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly formGroup: FormGroup;
  public readonly federalDistrictControlName: string;
  public readonly regionControlName: string;
  public readonly cityControlName: string;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.federalDistrictControlName = 'federalDistricts';
    this.regionControlName = 'regions';
    this.cityControlName = 'cities';

    this.formGroup = this._formBuilder.group({
      // federalDistricts: new FormControl ([]), 
      // regions: new FormControl([]),
      // cities: new FormControl([])
    });

    this.formGroup.valueChanges
      .subscribe(data => {
        console.clear();
        console.log(
          `Federal districts: ${data.federalDistricts || []} 
          \nRegions: ${data.regions || []} 
          \nCities: ${data.cities || []}`
        );
      });
  }
}
