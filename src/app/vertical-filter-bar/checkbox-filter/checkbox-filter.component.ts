import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CheckboxFilter } from './checkbox-filter.model';
import { FBFilterComponent } from '../fb-filter-component.interface';
import { ShowMoreModalComponent } from './show-more-modal/show-more-modal.component';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent implements OnInit, FBFilterComponent {

  @Input()
  public model: CheckboxFilter

  @Output()
  public change: EventEmitter<string[]> = new EventEmitter();

  @ViewChild(ShowMoreModalComponent)
  public showMoreModal: ShowMoreModalComponent

  constructor() { }

  ngOnInit() {
  }

  public checkChanged(item: string, event: Event, checked: boolean): void {
    let index = this.model.filterValue.indexOf(item)
    if(checked) {
      if(index === -1)
         this.model.filterValue.push(item)
    } else {
      this.model.filterValue.splice(index, 1)
    }
    event.stopPropagation()
     this.change.emit(this.model.filterValue)
  }

  onApply(items: string[]) {    
    this.model.filterValue = items
    this.change.emit(this.model.filterValue)
  }
}
