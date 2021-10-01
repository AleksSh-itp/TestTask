import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FederalDistrictComponent } from './components/federal-district/federal-district.component';
import { RegionComponent } from './components/region/region.component';
import { CityComponent } from './components/city/city.component';

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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
