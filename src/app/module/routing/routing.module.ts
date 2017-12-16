import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MilongaComponent } from '../../page/milonga/milonga.component';
import { CodeComponent } from '../../page/code/code.component';
import { OrganisationComponent } from '../../page/organisation/organisation.component';
import { Dec2017Component } from '../../page/milonga/dec2017/dec2017.component';
import { ContactComponent } from '../../page/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/milonga/dec2017', pathMatch: 'full' },
  { path: 'milonga', component: MilongaComponent },
  { path: 'milonga/dec2017', component: Dec2017Component },
  { path: 'code', component: CodeComponent },
  { path: 'organisation', component: OrganisationComponent },
  { path: 'contact', component: ContactComponent }
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
