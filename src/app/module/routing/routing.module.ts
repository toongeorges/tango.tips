import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MilongaComponent } from '../../page/milonga/milonga.component';
import { CodeComponent } from '../../page/code/code.component';
import { OrganisationComponent } from '../../page/organisation/organisation.component';
import { ContactComponent } from '../../page/contact/contact.component';
import { Dec2017Component } from '../../page/milonga/dec2017/dec2017.component';
import { Dec2017bComponent } from '../../page/milonga/dec2017/dec2017b.component';

const routes: Routes = [
  { path: 'milonga', component: MilongaComponent },
  { path: 'milonga/dec2017', component: Dec2017Component },
  { path: 'milonga/dec2017b', component: Dec2017bComponent },
  { path: 'code', component: CodeComponent },
  { path: 'organisation', component: OrganisationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/milonga/dec2017b', pathMatch: 'full' }
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
