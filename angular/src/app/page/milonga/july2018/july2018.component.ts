import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-july2018',
  templateUrl: './july2018.component.html',
  styleUrls: ['./july2018.component.css']
})
export class July2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/july2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/july2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/july2018-back.svg";
  }
}
