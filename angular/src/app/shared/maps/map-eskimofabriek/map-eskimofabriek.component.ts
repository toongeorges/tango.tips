import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-eskimofabriek',
  templateUrl: './map-eskimofabriek.component.html',
  styleUrls: ['./map-eskimofabriek.component.css']
})
export class MapEskimofabriekComponent implements OnInit {
  lat: number = 51.07122666777775;
  lng: number = 3.7260800716887843;
  zoom: number = 16;
  
  constructor() { }

  ngOnInit() {
  }

}
