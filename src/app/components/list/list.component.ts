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
      federalDistricts: this._formBuilder.group({
        regions: this._formBuilder.group({
          cities: [null]
        })
      })
    })
  }

  public ngOnInit(): void {
    console.log(this.formGroup);
  }
}
