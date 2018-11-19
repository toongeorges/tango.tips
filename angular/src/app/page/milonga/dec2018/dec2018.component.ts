import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec2018',
  templateUrl: './dec2018.component.html',
  styleUrls: ['./dec2018.component.css']
})
export class Dec2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/dec2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/dec2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/dec2018-back.svg";
  }
}
