import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dec2017b',
  templateUrl: './dec2017b.component.html',
  styleUrls: ['./dec2017b.component.css']
})
export class Dec2017bComponent implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/dec2017b-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017b-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017b-back.svg";
  }
}
