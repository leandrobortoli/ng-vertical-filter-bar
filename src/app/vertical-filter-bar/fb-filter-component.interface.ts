import { FBFilter } from "./fb-filter.interface";
import { Output, EventEmitter } from "@angular/core";

export interface FBFilterComponent {
    model: FBFilter
    change: EventEmitter<string|string[]|number|number[]>
}