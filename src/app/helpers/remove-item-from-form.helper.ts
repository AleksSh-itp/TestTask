import { FormControl } from "@angular/forms";
import { Item } from "../models/types/item.type";

export function removeItemFromForm(control: FormControl, item: Item) {
    if (control == null) return;

    const formValue = control.value;
    const index = formValue.indexOf(item.id);

    if (index !== -1) {
        formValue.splice(index, 1);
    }

    control.setValue(formValue);
}