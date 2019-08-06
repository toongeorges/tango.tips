import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jul2019',
  templateUrl: './jul2019.component.html',
  styleUrls: ['./jul2019.component.scss']
})
export class Jul2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/jul2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/jul2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/jul2019-back.svg";
  }
}
