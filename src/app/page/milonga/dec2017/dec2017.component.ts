import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec2017',
  templateUrl: './dec2017.component.html',
  styleUrls: ['./dec2017.component.css']
})
export class Dec2017Component implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/dec2017-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017-back.svg";
  }
}
