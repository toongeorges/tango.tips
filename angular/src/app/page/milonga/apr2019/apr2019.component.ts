import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apr2019',
  templateUrl: './apr2019.component.html',
  styleUrls: ['./apr2019.component.css']
})
export class Apr2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/apr2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2019-back.svg";
  }
}
