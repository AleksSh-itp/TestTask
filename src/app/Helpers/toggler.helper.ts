import { Item } from "../models/types/item.type";
import { Toggle } from "../models/types/toggle.type";

export class Toggler {
    private _toggle: Toggle[] = [];

    constructor(items: Item[]) {
        items.forEach(item => {
            this._toggle.push({ itemId: item.id, state: false });
        })
    }

    public expand(itemId: number): void {
        const toggle = this._toggle
            .find(item => item.itemId === itemId);
        toggle.state = !toggle.state;
    }

    public getToggleState(itemId: number): boolean {
        return this._toggle
            .find(item => item.itemId === itemId).state;
    }
}