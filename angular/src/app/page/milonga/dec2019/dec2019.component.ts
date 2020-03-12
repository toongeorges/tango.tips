import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec2019',
  templateUrl: './dec2019.component.html',
  styleUrls: ['./dec2019.component.scss']
})
export class Dec2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/dec2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/dec2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/dec2019-back.svg";
  }
}
