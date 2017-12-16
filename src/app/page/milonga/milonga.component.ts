import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milonga',
  templateUrl: './milonga.component.html',
  styleUrls: ['./milonga.component.css']
})
export class MilongaComponent implements OnInit {
  imgSrc: string = "/assets/images/milonga/dates/dec2017-forward.svg";
  
  constructor() { }

  ngOnInit() {
  }

  onMouseOver(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017-forward-hover.svg";
  }

  onMouseOut(): void {
    this.imgSrc = "/assets/images/milonga/dates/dec2017-forward.svg";
  }
}
