import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { RangeFilter } from './range-filter.model';
import { FBFilterComponent } from '../fb-filter-component.interface';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.css'],
})
export class RangeFilterComponent implements OnInit, FBFilterComponent {

  @Input()
  public model: RangeFilter
  
  @Output()
  change: EventEmitter<number[]> = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }

  rangeChanged(event: any): void {
    if(this.model.filterValue[0] === this.model.min && this.model.filterValue[1] === this.model.max)
      this.change.emit(undefined)
    else
      this.change.emit(this.model.filterValue)
  }
}
