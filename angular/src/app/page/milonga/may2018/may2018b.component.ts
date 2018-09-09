import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-may2018b',
  templateUrl: './may2018b.component.html',
  styleUrls: ['./may2018b.component.css']
})
export class May2018bComponent implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/may2018b-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/may2018b-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/may2018b-back.svg";
  }
}
