import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jan2018b',
  templateUrl: './jan2018b.component.html',
  styleUrls: ['./jan2018b.component.css']
})
export class Jan2018bComponent implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/jan2018b-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/jan2018b-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/jan2018b-back.svg";
  }
}
