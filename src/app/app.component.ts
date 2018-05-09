import { Component } from '@angular/core';
import { FBFilter } from './vertical-filter-bar/fb-filter.interface';
import { CheckboxFilter } from './vertical-filter-bar/checkbox-filter/checkbox-filter.model';
import { RangeFilter } from './vertical-filter-bar/range-filter/range-filter.model';
import { KeywordFilter } from './vertical-filter-bar/keyword-filter/keyword-filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public manufacturers: string[] = ['Apple', 'Dell', 'Acer', 'HP', 'Lenovo', 'Asus', 'Alienware', 'Cooler Master', 'Fujitsu', 'IBM', 'LG Eletronics', 'MSI', 'Nvidia', 'Panasonic', 'Samsung']
  public conditions: string[] = ['New', 'Refurbished', 'Used']
  public displaySizes: string[] = ['17 Inches and Above', '16 to 16.9 Inches', '15 to 15.9 Inches', '14 to 14.9 Inches', '13 to 13.9 Inches', '12 to 12.9 Inches', '12 Inches and Under']
  public ramSize: string[] = ['32GB and Above', '16GB', '12GB', '8GB', '6GB', '4GB', '3GB', '2GB and Under']

  verticalBarFilters: FBFilter[] = [
    new KeywordFilter('description', 'Description'),
    new RangeFilter('price', 'Price', 0, 10000, true),
    new CheckboxFilter('manufacturer', 'Manufacturer', this.manufacturers, 6),
    new CheckboxFilter('condition', 'Condition', this.conditions),
    new CheckboxFilter('display-size', 'Display Size', this.displaySizes),
    new CheckboxFilter('ram-size', 'RAM Size', this.ramSize)
  ]
}
