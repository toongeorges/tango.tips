import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct2018',
  templateUrl: './oct2018.component.html',
  styleUrls: ['./oct2018.component.css']
})
export class Oct2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/oct2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/oct2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/oct2018-back.svg";
  }
}
