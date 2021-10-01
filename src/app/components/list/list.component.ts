import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
    this.formGroup = this._formBuilder.group({
      federalDistrict: [" "],
      region: [" "],
      city: [" "]
    })
  }

  public ngOnInit(): void {
  }
}
