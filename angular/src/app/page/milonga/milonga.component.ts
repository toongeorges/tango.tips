import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milonga',
  templateUrl: './milonga.component.html',
  styleUrls: ['./milonga.component.css']
})
export class MilongaComponent implements OnInit {
  private imageLinks = {
    "/milonga/dec2017" : {
      "selected": "assets/images/milonga/dates/dec2017-forward.svg",
      "hover": "assets/images/milonga/dates/dec2017-forward-hover.svg",
      "out": "assets/images/milonga/dates/dec2017-forward.svg"
    },
    "/milonga/dec2017b" : {
      "selected": "assets/images/milonga/dates/dec2017b-forward.svg",
      "hover": "assets/images/milonga/dates/dec2017b-forward-hover.svg",
      "out": "assets/images/milonga/dates/dec2017b-forward.svg"
    },
    "/milonga/jan2018" : {
      "selected": "assets/images/milonga/dates/jan2018-forward.svg",
      "hover": "assets/images/milonga/dates/jan2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/jan2018-forward.svg"
    },
    "/milonga/jan2018b" : {
      "selected": "assets/images/milonga/dates/jan2018b-forward.svg",
      "hover": "assets/images/milonga/dates/jan2018b-forward-hover.svg",
      "out": "assets/images/milonga/dates/jan2018b-forward.svg"
    },
    "/milonga/feb2018" : {
      "selected": "assets/images/milonga/dates/feb2018-forward.svg",
      "hover": "assets/images/milonga/dates/feb2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/feb2018-forward.svg"
    },
    "/milonga/feb2018b" : {
      "selected": "assets/images/milonga/dates/feb2018b-forward.svg",
      "hover": "assets/images/milonga/dates/feb2018b-forward-hover.svg",
      "out": "assets/images/milonga/dates/feb2018b-forward.svg"
    },
    "/milonga/mar2018" : {
      "selected": "assets/images/milonga/dates/mar2018-forward.svg",
      "hover": "assets/images/milonga/dates/mar2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/mar2018-forward.svg"
    },
    "/milonga/apr2018" : {
      "selected": "assets/images/milonga/dates/apr2018-forward.svg",
      "hover": "assets/images/milonga/dates/apr2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/apr2018-forward.svg"
    },
    "/milonga/may2018" : {
      "selected": "assets/images/milonga/dates/may2018-forward.svg",
      "hover": "assets/images/milonga/dates/may2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/may2018-forward.svg"
    },
    "/milonga/may2018b" : {
      "selected": "assets/images/milonga/dates/may2018b-forward.svg",
      "hover": "assets/images/milonga/dates/may2018b-forward-hover.svg",
      "out": "assets/images/milonga/dates/may2018b-forward.svg"
    },
    "/milonga/june2018" : {
      "selected": "assets/images/milonga/dates/june2018-forward.svg",
      "hover": "assets/images/milonga/dates/june2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/june2018-forward.svg"
    },
    "/milonga/july2018" : {
      "selected": "assets/images/milonga/dates/july2018-forward.svg",
      "hover": "assets/images/milonga/dates/july2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/july2018-forward.svg"
    },
    "/milonga/aug2018" : {
      "selected": "assets/images/milonga/dates/aug2018-forward.svg",
      "hover": "assets/images/milonga/dates/aug2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/aug2018-forward.svg"
    },
    "/milonga/oct2018" : {
      "selected": "assets/images/milonga/dates/oct2018-forward.svg",
      "hover": "assets/images/milonga/dates/oct2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/oct2018-forward.svg"
    },
    "/milonga/dec2018" : {
      "selected": "assets/images/milonga/dates/dec2018-forward.svg",
      "hover": "assets/images/milonga/dates/dec2018-forward-hover.svg",
      "out": "assets/images/milonga/dates/dec2018-forward.svg"
    },
    "/milonga/mar2019" : {
      "selected": "assets/images/milonga/dates/mar2019-forward.svg",
      "hover": "assets/images/milonga/dates/mar2019-forward-hover.svg",
      "out": "assets/images/milonga/dates/mar2019-forward.svg"
    },
    "/milonga/apr2019" : {
      "selected": "assets/images/milonga/dates/apr2019-forward.svg",
      "hover": "assets/images/milonga/dates/apr2019-forward-hover.svg",
      "out": "assets/images/milonga/dates/apr2019-forward.svg"
    },
    "/milonga/may2019" : {
      "selected": "assets/images/milonga/dates/may2019-forward.svg",
      "hover": "assets/images/milonga/dates/may2019-forward-hover.svg",
      "out": "assets/images/milonga/dates/may2019-forward.svg"
    },
    "/milonga/june2019" : {
      "selected": "assets/images/milonga/dates/june2019-forward.svg",
      "hover": "assets/images/milonga/dates/june2019-forward-hover.svg",
      "out": "assets/images/milonga/dates/june2019-forward.svg"
    },
    "/milonga/jul2019" : {
      "selected": "assets/images/milonga/dates/jul2019-forward.svg",
      "hover": "assets/images/milonga/dates/jul2019-forward-hover.svg",
      "out": "assets/images/milonga/dates/jul2019-forward.svg"
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
