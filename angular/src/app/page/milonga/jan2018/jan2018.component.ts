import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jan2018',
  templateUrl: './jan2018.component.html',
  styleUrls: ['./jan2018.component.css']
})
export class Jan2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/jan2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/jan2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/jan2018-back.svg";
  }
}
