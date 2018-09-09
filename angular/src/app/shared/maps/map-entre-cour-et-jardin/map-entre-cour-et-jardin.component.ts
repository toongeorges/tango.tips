import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-entre-cour-et-jardin',
  templateUrl: './map-entre-cour-et-jardin.component.html',
  styleUrls: ['./map-entre-cour-et-jardin.component.css']
})
export class MapEntreCourEtJardinComponent implements OnInit {
  lat: number = 51.0043073;
  lng: number = 3.799255300000027;
  zoom: number = 16;
  
  constructor() { }

  ngOnInit() {
  }

}
