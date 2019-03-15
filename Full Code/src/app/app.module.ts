import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MapService} from './map.service';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CurrencyViewComponent } from './currency-view/currency-view.component';
import { LanguageViewComponent } from './language-view/language-view.component';
import { Filter1Pipe } from './filter1.pipe';
import { CurrencyFilterPipe } from './currency-filter.pipe';
import { SelectFilterPipe } from './select-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    CurrencyViewComponent,
    LanguageViewComponent,
    Filter1Pipe,
    CurrencyFilterPipe,
    SelectFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'region/:region',component:AllCountriesComponent},
      {path:'name/:name',component:SingleCountryComponent},
      {path:'currency/:currency',component:CurrencyViewComponent},
      {path:'language/:language',component:LanguageViewComponent}
    ],{useHash:true}
  )
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
