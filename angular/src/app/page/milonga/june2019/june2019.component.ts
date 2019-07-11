import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-june2019',
  templateUrl: './june2019.component.html',
  styleUrls: ['./june2019.component.scss']
})
export class June2019Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/june2019-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/june2019-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/june2019-back.svg";
  }
}
