import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formGroup = this._formBuilder.group({
      federalDistricts: [[]],
      regions: [[]],
      cities: [[]]
    });
  }

  public ngOnInit(): void {
    this.formGroup.valueChanges
      .subscribe(data => {
        console.clear();
        console.log(
          `Federal districts: ${data.federalDistricts} 
          \nRegions: ${data.regions} 
          \nCities: ${data.cities}`
        );
      });
  }
}
