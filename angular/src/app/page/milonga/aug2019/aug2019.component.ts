import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aug2019',
  templateUrl: './aug2019.component.html',
  styleUrls: ['./aug2019.component.scss']
})
export class Aug2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/aug2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/aug2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/aug2019-back.svg";
  }
}
