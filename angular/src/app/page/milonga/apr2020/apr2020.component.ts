import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apr2020',
  templateUrl: './apr2020.component.html',
  styleUrls: ['./apr2020.component.scss']
})
export class Apr2020Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/apr2020-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2020-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/apr2020-back.svg";
  }
}
