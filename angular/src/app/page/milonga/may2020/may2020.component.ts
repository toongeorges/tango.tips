import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may2020',
  templateUrl: './may2020.component.html',
  styleUrls: ['./may2020.component.scss']
})
export class May2020Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/may2020-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/may2020-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/may2020-back.svg";
  }
}
