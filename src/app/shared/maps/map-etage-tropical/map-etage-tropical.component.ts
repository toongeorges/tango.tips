import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-etage-tropical',
  templateUrl: './map-etage-tropical.component.html',
  styleUrls: ['./map-etage-tropical.component.css']
})
export class MapEtageTropicalComponent implements OnInit {
  lat: number = 51.07586553868455;
  lng: number = 3.7338817144598124;
  zoom: number = 16;
  
  constructor() { }

  ngOnInit() {
  }

}
