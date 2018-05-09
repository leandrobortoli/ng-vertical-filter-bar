import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FBFilter } from './fb-filter.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-vertical-filter-bar',
  templateUrl: './vertical-filter-bar.component.html',
  styleUrls: ['./vertical-filter-bar.component.css']
})
export class VerticalFilterBarComponent implements OnInit, AfterViewInit {

  @Input()
  public filters: FBFilter[]

  public filterResults: any = new Object()

  @ViewChildren('filterPanel')
  public filterPanels: QueryList<ElementRef>
  public filterCollapsed: boolean[] = []

  @Output()
  public filterResultsChange: EventEmitter<any> = new EventEmitter()

  constructor(
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    //Update filter Results and filter Values based on the queryParams
    this.route.queryParamMap.subscribe((paramsMap: Params) => {
      this.filters.forEach(filterModel => {  
        let paramFilter = paramsMap.params[filterModel.identifier]
        if(paramFilter) {
          if(Array.isArray(filterModel.filterValue)) {
            if(!Array.isArray(paramFilter)) {
              filterModel.filterValue = new Array()
              filterModel.filterValue.push(paramFilter)
            } else {
              filterModel.filterValue = paramFilter.slice()
            }
          } else {
            filterModel.filterValue = paramFilter
          }
          this.filterResults[filterModel.identifier] = filterModel.filterValue
        } else {
          filterModel.resetFilterValue()
          this.filterResults[filterModel.identifier] = undefined
        }
      })
    })
    //Initialize filter Collapsed array
    this.filterCollapsed.fill(false, 0, this.filterCollapsed.length)
  }

  ngAfterViewInit() {
    this.filterPanels.forEach((filterPanel: ElementRef, index: number) => {
      $(filterPanel.nativeElement).on('show.bs.collapse', () => { this.changeCollapsed(index, false) })
      $(filterPanel.nativeElement).on('hide.bs.collapse', () => { this.changeCollapsed(index, true) })
    })
  }

  private changeCollapsed(index: number, collapsed: boolean): void {
    this.filterCollapsed[index] = collapsed
    this.changeDetector.detectChanges()
  }

  onFilterChanged(identifier: string, filterValue: any): void {
    //If value empty, set to undefined
    if (filterValue != undefined && filterValue.length == 0)
      filterValue = undefined
    //Update filterResults
    this.filterResults[identifier] = filterValue
    //Update query params
    this.router.navigate(['.'], { queryParams: this.filterResults })
    //Emits filterResultChange event
    this.filterResultsChange.emit(this.filterResults)
  }

}
