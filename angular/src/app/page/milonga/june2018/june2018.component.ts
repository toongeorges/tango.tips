import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-june2018',
  templateUrl: './june2018.component.html',
  styleUrls: ['./june2018.component.css']
})
export class June2018Component implements OnInit {
  imgSrc: string = "assets/images/milonga/dates/june2018-back.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "assets/images/milonga/dates/june2018-back-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "assets/images/milonga/dates/june2018-back.svg";
  }
}
