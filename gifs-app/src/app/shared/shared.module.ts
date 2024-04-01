import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    sidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    sidebarComponent
  ]
})
export class SharedModule { }
