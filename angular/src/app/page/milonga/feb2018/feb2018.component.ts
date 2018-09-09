import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feb2018',
  templateUrl: './feb2018.component.html',
  styleUrls: ['./feb2018.component.css']
})
export class Feb2018Component implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/feb2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/feb2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/feb2018-back.svg";
  }
}
