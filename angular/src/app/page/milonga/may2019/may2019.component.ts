import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may2019',
  templateUrl: './may2019.component.html',
  styleUrls: ['./may2019.component.css']
})
export class May2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/may2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/may2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/may2019-back.svg";
  }
}
