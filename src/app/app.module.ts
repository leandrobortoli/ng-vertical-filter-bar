import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VerticalFilterBarComponent } from './vertical-filter-bar/vertical-filter-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CheckboxFilterComponent } from './vertical-filter-bar/checkbox-filter/checkbox-filter.component';
import { RangeFilterComponent } from './vertical-filter-bar/range-filter/range-filter.component';
import { KeywordFilterComponent } from './vertical-filter-bar/keyword-filter/keyword-filter.component';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { ShowMoreModalComponent } from './vertical-filter-bar/checkbox-filter/show-more-modal/show-more-modal.component';
import { FilterResultsComponent } from './filter-results/filter-results.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerticalFilterBarComponent,
    FilterResultsComponent,
    FooterComponent,
    CheckboxFilterComponent,
    RangeFilterComponent,
    KeywordFilterComponent,
    ShowMoreModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
