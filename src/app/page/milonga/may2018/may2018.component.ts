import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may2018',
  templateUrl: './may2018.component.html',
  styleUrls: ['./may2018.component.css']
})
export class May2018Component implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/may2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/may2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/may2018-back.svg";
  }
}
