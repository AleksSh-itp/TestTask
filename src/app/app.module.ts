import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FederalDistrictComponent } from './components/list/federal-district/federal-district.component';
import { RegionComponent } from './components/list/region/region.component';
import { CityComponent } from './components/list/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FederalDistrictComponent,
    RegionComponent,
    CityComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
