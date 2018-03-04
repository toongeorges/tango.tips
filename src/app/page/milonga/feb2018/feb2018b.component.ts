import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feb2018b',
  templateUrl: './feb2018b.component.html',
  styleUrls: ['./feb2018b.component.css']
})
export class Feb2018bComponent implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/feb2018b-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/feb2018b-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/feb2018b-back.svg";
  }
}
