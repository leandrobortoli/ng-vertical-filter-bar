
  

# Angular Vertical Filter Bar

Vertical Filter Bar it's an e-commerce like filter bar for angular.
I developed it for learning purpose, but it can be quite useful.

## Usage

The component requires an array of FBFilters as input, as follows:

```JavaScript
verticalBarFilters: FBFilter[] = [
	new  KeywordFilter('description', 'Description'),
	new  RangeFilter('price', 'Price', 0, 10000, true),
	new  CheckboxFilter('manufacturer', 'Manufacturer', this.manufacturers, 6),
	new  CheckboxFilter('condition', 'Condition', this.conditions),
	new  CheckboxFilter('display-size', 'Display Size', this.displaySizes),
	new  CheckboxFilter('ram-size', 'RAM Size', this.ramSize)
]
```
```HTML
<app-vertical-filter-bar [filters]="verticalBarFilters"></app-vertical-filter-bar>
```

When a filter is changed, the filter results will be updated on the query params, and the filterResultsChanged event will be triggered.

Currently, there are KeywordFilter, RangeFilter, and CheckboxFilter, but different kind of filters can be easily developed implementing the interfaces FBFilter and FBFilterComponent.

[Online Demo](https://leandrobortoli.github.io/ng-vertical-filter-bar).

## Dependencies


Vertical Filter Bar utilizes bootstrap 4 with Jquery, FontAwesome 5(SVG with JS) for the icons, and PrimeNG for the RangeFilter.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Issue tracking

The issues for this template are tracked on its github.com page. All bug reports and feature requests are appreciated.