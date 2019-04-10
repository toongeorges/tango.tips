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
import { New2018WishesEnComponent } from './page/milonga/jan2018/new-2018-wishes-en/new-2018-wishes-en.component';
import { New2018WishesNlComponent } from './page/milonga/jan2018/new-2018-wishes-nl/new-2018-wishes-nl.component';
import { Jan2018bComponent } from './page/milonga/jan2018/jan2018b.component';
import { Feb2018Component } from './page/milonga/feb2018/feb2018.component';
import { StatutenComponent } from './page/organisation/statuten/statuten.component';
import { Feb2018bComponent } from './page/milonga/feb2018/feb2018b.component';
import { Mar2018Component } from './page/milonga/mar2018/mar2018.component';
import { Apr2018Component } from './page/milonga/apr2018/apr2018.component';
import { May2018Component } from './page/milonga/may2018/may2018.component';
import { May2018bComponent } from './page/milonga/may2018/may2018b.component';
import { June2018Component } from './page/milonga/june2018/june2018.component';
import { July2018Component } from './page/milonga/july2018/july2018.component';
import { Aug2018Component } from './page/milonga/aug2018/aug2018.component';
import { Oct2018Component } from './page/milonga/oct2018/oct2018.component';
import { Dec2018Component } from './page/milonga/dec2018/dec2018.component';
import { Mar2019Component } from './page/milonga/mar2019/mar2019.component';
import { Apr2019Component } from './page/milonga/apr2019/apr2019.component';

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
    Jan2018Component,
    New2018WishesEnComponent,
    New2018WishesNlComponent,
    Jan2018bComponent,
    Feb2018Component,
    StatutenComponent,
    Feb2018bComponent,
    Mar2018Component,
    Apr2018Component,
    May2018Component,
    May2018bComponent,
    June2018Component,
    July2018Component,
    Aug2018Component,
    Oct2018Component,
    Dec2018Component,
    Mar2019Component,
    Apr2019Component
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
