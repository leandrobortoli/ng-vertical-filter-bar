import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-more-modal',
  templateUrl: './show-more-modal.component.html',
  styleUrls: ['./show-more-modal.component.css']
})
export class ShowMoreModalComponent implements OnInit {
  
  @Input()
  public title: string
  @Input()
  public id: string
  @Input()
  public options: string[]
  public selectedOptions: string[] = []

  public searchText: string
  
  @Output()
  private apply: EventEmitter<string[]> = new EventEmitter()

  constructor() { }

  public initModal(selectedOptions: string[])  {
    this.selectedOptions = selectedOptions.slice()
    this.searchText = ""
  }

  private checkChanged(item: string, event: Event, checked: boolean): void {
    
    let index = this.selectedOptions.indexOf(item)
    if(checked) {
      if(index === -1)
         this.selectedOptions.push(item)
    } else {
      this.selectedOptions.splice(index, 1)
    }
    event.stopPropagation()
  }

  public onApply() {
    this.apply.emit(this.selectedOptions)
  }

  ngOnInit() {
  }
}
