import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apr2018',
  templateUrl: './apr2018.component.html',
  styleUrls: ['./apr2018.component.css']
})
export class Apr2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/apr2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2018-back.svg";
  }
}
