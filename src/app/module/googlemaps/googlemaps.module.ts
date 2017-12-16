import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core'; //Google Maps

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDjysCv4c7-c-Y1-oYavfUQB-7puHRV70U'
    })
  ],
  exports: [
    AgmCoreModule
  ],
  declarations: []
})
export class GooglemapsModule {

}
