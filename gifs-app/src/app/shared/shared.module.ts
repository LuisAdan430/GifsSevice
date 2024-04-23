import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    sidebarComponent,
    LazyImageComponent
    // Aqui se verifica que los componentes externos sean utilizados solo se pueden usar dentro si no
    // se declaran en export
  ],
  imports: [
    CommonModule
    // Aqui se utilizan importaciones externas el
    // CommonModule se utiliza para que se puedan usar en los ts metodos matematicos o calculos
    // Tambien se pueden importar modulos externos mientas se compartan desde otro modulo en export
  ],
  exports:[
    sidebarComponent,
    LazyImageComponent
    // Aqui se colocan los componentes que se planean comportir en otros modulos o en otros componentes
    // Se debe colocar , para separar los componentes externos a ocupar

  ]
})
export class SharedModule { }
