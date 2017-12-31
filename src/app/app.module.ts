import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './module/material/material.module';
import { RoutingModule } from './module/routing/routing.module';
import { GooglemapsModule } from './module/googlemaps/googlemaps.module';

import { AppComponent } from './app.component';

import { MenuComponent } from './shared/menu/menu.component';
import { MapEtageTropicalComponent } from './shared/maps/map-etage-tropical/map-etage-tropical.component';
import { MapEntreCourEtJardinComponent } from './shared/maps/map-entre-cour-et-jardin/map-entre-cour-et-jardin.component';
import { MapEskimofabriekComponent } from './shared/maps/map-eskimofabriek/map-eskimofabriek.component';
import { MilongaComponent } from './page/milonga/milonga.component';
import { CodeComponent } from './page/code/code.component';
import { OrganisationComponent } from './page/organisation/organisation.component';
import { ContactComponent } from './page/contact/contact.component';
import { InterviewNlComponent } from './page/organisation/interview-nl/interview-nl.component';
import { InterviewEnComponent } from './page/organisation/interview-en/interview-en.component';
import { Dec2017Component } from './page/milonga/dec2017/dec2017.component';
import { Dec2017bComponent } from './page/milonga/dec2017/dec2017b.component';
import { Jan2018Component } from './page/milonga/jan2018/jan2018.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MapEtageTropicalComponent,
    MapEntreCourEtJardinComponent,
    MapEskimofabriekComponent,
    MilongaComponent,
    CodeComponent,
    OrganisationComponent,
    ContactComponent,
    InterviewNlComponent,
    InterviewEnComponent,
    Dec2017Component,
    Dec2017bComponent,
    Jan2018Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    GooglemapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
