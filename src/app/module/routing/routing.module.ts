import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MilongaComponent } from '../../page/milonga/milonga.component';
import { CodeComponent } from '../../page/code/code.component';
import { OrganisationComponent } from '../../page/organisation/organisation.component';
import { ContactComponent } from '../../page/contact/contact.component';
import { Dec2017Component } from '../../page/milonga/dec2017/dec2017.component';
import { Dec2017bComponent } from '../../page/milonga/dec2017/dec2017b.component';
import { Jan2018Component } from '../../page/milonga/jan2018/jan2018.component';
import { Jan2018bComponent } from '../../page/milonga/jan2018/jan2018b.component';
import { Feb2018Component } from '../../page/milonga/feb2018/feb2018.component';
import { Feb2018bComponent } from '../../page/milonga/feb2018/feb2018b.component';
import { Mar2018Component } from '../../page/milonga/mar2018/mar2018.component';
import { InterviewNlComponent } from '../../page/organisation/interview-nl/interview-nl.component';
import { InterviewEnComponent } from '../../page/organisation/interview-en/interview-en.component';
import { StatutenComponent } from '../../page/organisation/statuten/statuten.component';
import { Apr2018Component } from '../../page/milonga/apr2018/apr2018.component';
import { May2018Component } from '../../page/milonga/may2018/may2018.component';
import { May2018bComponent } from '../../page/milonga/may2018/may2018b.component';

const routes: Routes = [
  { path: 'milonga', component: MilongaComponent },
  { path: 'milonga/dec2017', component: Dec2017Component },
  { path: 'milonga/dec2017b', component: Dec2017bComponent },
  { path: 'milonga/jan2018', component: Jan2018Component },
  { path: 'milonga/jan2018b', component: Jan2018bComponent },
  { path: 'milonga/feb2018', component: Feb2018Component },
  { path: 'milonga/feb2018b', component: Feb2018bComponent },
  { path: 'milonga/mar2018', component: Mar2018Component },
  { path: 'milonga/apr2018', component: Apr2018Component },
  { path: 'milonga/may2018', component: May2018Component },
  { path: 'milonga/may2018b', component: May2018bComponent },
  { path: 'code', component: CodeComponent },
  { path: 'organisation', component: OrganisationComponent,
    children: [
      { path: 'nederlands', component: InterviewNlComponent },
      { path: 'english', component: InterviewEnComponent },
      { path: 'statuten', component: StatutenComponent },
      { path: '', redirectTo: 'nederlands', pathMatch: 'full' }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'statuten', redirectTo: '/organisation/statuten', pathMatch: 'full' },
  { path: '', redirectTo: '/milonga', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
