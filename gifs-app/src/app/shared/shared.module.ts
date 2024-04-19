import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    sidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    sidebarComponent
  ]
})
export class SharedModule { }
