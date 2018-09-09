import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aug2018',
  templateUrl: './aug2018.component.html',
  styleUrls: ['./aug2018.component.css']
})
export class Aug2018Component implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/aug2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/aug2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/aug2018-back.svg";
  }
}
