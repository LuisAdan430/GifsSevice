import { Component, OnInit, Input } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  // Como cambiar de nombre el selector para reutilizar el componente en otros componentes
  // selector: ' lazy-image ' [Solo se debe cambiar el nombre despues de selector entre comillas recomendado colocar guiones para saber a que hace referencia]
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
// Se agrega el onInit al principio para que al iniciar se crea un metodo donde se colocaran validaciones
// o ejecutaciones que se requieran desde un principio
// para implementar el OnInit se agrega el implements
export class LazyImageComponent implements OnInit{
  // Se arega el metodo Input el cual hace referencia a que consultara un valor
  // en cual sera enviado atravez del metodo en este caso es la Url de la imagen.
  // Se coloca este [!] a lado del nombre de la variable para ser notar que el valor siempre estara
  // y que typeScript  no marque error
  @Input()
  public url!: string;

  /*
  En este apartado se crea la varible alt o texto alternativo donde si no se encuentra se asigna como
  una cadena vacia.
  */
  @Input()
  public alt: string = '';

  /*
    Se crear el metodo ngOnInit() para poder ocuparlo recordar que se debe implementar el onInit en la clase
    el metodo no regresa nada por ahora , primero que nada valida que el url no se encuentre vacia
    si se encuentra vacia se crea un throw o exception de error donde se manda el mensaje personsalisado
    de que se requiere la url o la propiedad que se requiera
  */
  ngOnInit(): void {
      if(!this.url) throw new Error ('URL property is required');
  }

}
