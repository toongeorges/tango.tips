import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mar2019',
  templateUrl: './mar2019.component.html',
  styleUrls: ['./mar2019.component.css']
})
export class Mar2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/mar2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/mar2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/mar2019-back.svg";
  }
}
