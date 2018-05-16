import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milonga',
  templateUrl: './milonga.component.html',
  styleUrls: ['./milonga.component.css']
})
export class MilongaComponent implements OnInit {
  private imageLinks = {
    "/milonga/dec2017" : {
      "selected": "/assets/images/milonga/dates/dec2017-forward.svg",
      "hover": "/assets/images/milonga/dates/dec2017-forward-hover.svg",
      "out": "/assets/images/milonga/dates/dec2017-forward.svg"
    },
    "/milonga/dec2017b" : {
      "selected": "/assets/images/milonga/dates/dec2017b-forward.svg",
      "hover": "/assets/images/milonga/dates/dec2017b-forward-hover.svg",
      "out": "/assets/images/milonga/dates/dec2017b-forward.svg"
    },
    "/milonga/jan2018" : {
      "selected": "/assets/images/milonga/dates/jan2018-forward.svg",
      "hover": "/assets/images/milonga/dates/jan2018-forward-hover.svg",
      "out": "/assets/images/milonga/dates/jan2018-forward.svg"
    },
    "/milonga/jan2018b" : {
      "selected": "/assets/images/milonga/dates/jan2018b-forward.svg",
      "hover": "/assets/images/milonga/dates/jan2018b-forward-hover.svg",
      "out": "/assets/images/milonga/dates/jan2018b-forward.svg"
    },
    "/milonga/feb2018" : {
      "selected": "/assets/images/milonga/dates/feb2018-forward.svg",
      "hover": "/assets/images/milonga/dates/feb2018-forward-hover.svg",
      "out": "/assets/images/milonga/dates/feb2018-forward.svg"
    },
    "/milonga/feb2018b" : {
      "selected": "/assets/images/milonga/dates/feb2018b-forward.svg",
      "hover": "/assets/images/milonga/dates/feb2018b-forward-hover.svg",
      "out": "/assets/images/milonga/dates/feb2018b-forward.svg"
    },
    "/milonga/mar2018" : {
      "selected": "/assets/images/milonga/dates/mar2018-forward.svg",
      "hover": "/assets/images/milonga/dates/mar2018-forward-hover.svg",
      "out": "/assets/images/milonga/dates/mar2018-forward.svg"
    },
    "/milonga/apr2018" : {
      "selected": "/assets/images/milonga/dates/apr2018-forward.svg",
      "hover": "/assets/images/milonga/dates/apr2018-forward-hover.svg",
      "out": "/assets/images/milonga/dates/apr2018-forward.svg"
    },
    "/milonga/may2018" : {
      "selected": "/assets/images/milonga/dates/may2018-forward.svg",
      "hover": "/assets/images/milonga/dates/may2018-forward-hover.svg",
      "out": "/assets/images/milonga/dates/may2018-forward.svg"
    },
    "/milonga/may2018b" : {
      "selected": "/assets/images/milonga/dates/may2018b-forward.svg",
      "hover": "/assets/images/milonga/dates/may2018b-forward-hover.svg",
      "out": "/assets/images/milonga/dates/may2018b-forward.svg"
    },
  }
  
  constructor() { }

  ngOnInit() {
  }

  getImageSource(path: string) {
    return this.imageLinks[path]['selected'];
  }

  onMouseOver(path: string): void {
    this.imageLinks[path]['selected'] = this.imageLinks[path]['hover'];
  }

  onMouseOut(path: string): void {
    this.imageLinks[path]['selected'] = this.imageLinks[path]['out'];
  }
}
