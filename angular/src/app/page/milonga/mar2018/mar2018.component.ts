import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mar2018',
  templateUrl: './mar2018.component.html',
  styleUrls: ['./mar2018.component.css']
})
export class Mar2018Component implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/mar2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/mar2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/mar2018-back.svg";
  }
}
