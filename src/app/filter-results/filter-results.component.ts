import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FilterChoice } from './filter-choice.model';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.css']
})
export class FilterResultsComponent implements OnInit {

  public filterResults: any
  public filterChoices: FilterChoice[]
  public currencyFormater: Intl.NumberFormat


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currencyFormater = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  }

  ngOnInit() {
    //Update filter choices based on the query params
    this.route.queryParamMap.subscribe((paramsMap: Params) => {
      this.filterResults = paramsMap.params
      this.filterChoices = []
      if (this.filterResults) {
        if (this.filterResults['description']) {
          this.filterChoices.push(new FilterChoice('description', 'Description', new Array(this.filterResults['description'])))
        }
        if (this.filterResults['price']) {
          let priceRange: number[] = this.filterResults['price']
          this.filterChoices.push(new FilterChoice('price', 'Price', ['From ' + this.currencyFormater.format(priceRange[0]) + ' To ' + this.currencyFormater.format(priceRange[1])]))
        }
        if (this.filterResults['manufacturer']) {
          if (Array.isArray(this.filterResults['manufacturer'])) {
            this.filterChoices.push(new FilterChoice('manufacturer', 'Manufacturer', this.filterResults['manufacturer']))
          } else {
            this.filterChoices.push(new FilterChoice('manufacturer', 'Manufacturer', new Array(this.filterResults['manufacturer'])))
          }
        }
        if (this.filterResults['condition']) {
          if (Array.isArray(this.filterResults['condition'])) {
            this.filterChoices.push(new FilterChoice('condition', 'Condition', this.filterResults['condition']))
          } else {
            this.filterChoices.push(new FilterChoice('condition', 'Condition', new Array(this.filterResults['condition'])))
          }
        }
        if (this.filterResults['display-size']) {
          if (Array.isArray(this.filterResults['display-size'])) {
            this.filterChoices.push(new FilterChoice('display-size', 'Display Size', this.filterResults['display-size']))
          } else {
            this.filterChoices.push(new FilterChoice('display-size', 'Display Size', new Array(this.filterResults['display-size'])))
          }
        }
        if (this.filterResults['ram-size']) {
          if (Array.isArray(this.filterResults['ram-size'])) {
            this.filterChoices.push(new FilterChoice('ram-size', 'RAM Size', this.filterResults['ram-size']))
          } else {
            this.filterChoices.push(new FilterChoice('ram-size', 'RAM Size', new Array(this.filterResults['ram-size'])))
          }
        }
      }
    })
  }

  /**
   * Remove clicked filter choice from the queryParams
   * @param choice 
   * @param value 
   */
  public removeFilterChoice(choice: FilterChoice, value: string): void {
    let params = Object.assign({}, this.route.snapshot.queryParams);
    if (choice.values.length == 1) {
      params[choice.identifier] = undefined
    } else {
      params[choice.identifier] = params[choice.identifier].slice()
      let index = params[choice.identifier].indexOf(value)
      params[choice.identifier].splice(index, 1)
      if(params[choice.identifier].length == 0) {
        params[choice.identifier] = undefined
      }
    }
    this.router.navigate(['.'], { queryParams: params })
  }
}