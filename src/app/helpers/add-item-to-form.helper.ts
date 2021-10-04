import { FormControl } from "@angular/forms";
import { Item } from "../models/types/item.type";

export function addItemToForm(control: FormControl, item: Item): void {
  if (control == null) return;
  
  const formValue = control.value;

  if (item.checked) {
    formValue.push(item.id);
  } else {
    const index = formValue.indexOf(item.id);
    if (index !== -1) {
      formValue.splice(index, 1);
    }
  }

  control.setValue(formValue);
}