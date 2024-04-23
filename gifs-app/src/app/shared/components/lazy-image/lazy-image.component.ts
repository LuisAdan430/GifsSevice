import { Component } from '@angular/core';

@Component({
  // Como cambiar de nombre el selector para reutilizar el componente en otros componentes
  // selector: ' lazy-image ' [Solo se debe cambiar el nombre despues de selector entre comillas recomendado colocar guiones para saber a que hace referencia]
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent {


}
