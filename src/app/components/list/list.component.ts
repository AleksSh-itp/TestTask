import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() formGroup: FormGroup;
  @Input() federalDistrictControlName: string;
  @Input() regionControlName: string;
  @Input() cityControlName: string;

  public validateControl(controlName: string): string {
    const existingControl = this.formGroup.get(controlName);
    if (existingControl) {
      return controlName;
    } else {
      return undefined;
    }
  }
}
