import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FBFilterComponent } from '../fb-filter-component.interface';
import { KeywordFilter } from './keyword-filter.model';

@Component({
  selector: 'app-keyword-filter',
  templateUrl: './keyword-filter.component.html',
  styleUrls: ['./keyword-filter.component.css']
})
export class KeywordFilterComponent implements OnInit, FBFilterComponent {

  @Input()
  public model: KeywordFilter

  @Output()
  public change: EventEmitter<string> = new EventEmitter()

  private keyUpTimeout: any

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event: Event) {
    event.stopPropagation()
    clearTimeout(this.keyUpTimeout)
    this.keyUpTimeout = setTimeout(() => {
      this.change.emit(this.model.filterValue)
    }, 450);
  }

  onChange(event: Event) {
    clearTimeout(this.keyUpTimeout)
    event.stopPropagation()
    this.change.emit(this.model.filterValue)
  }
}
