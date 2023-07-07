import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  term : string = '';

  /** Especificación de Acceso en TypeScript
   * public - puede acceder a los miembros desde fuera de la clase.
   * private - NO puede acceder a los miembros (o verlos) desde fuera de la clase
   * protected - NO puede acceder a los miembros desde fuera de la clase, sin embargo, se puede acceder a ellos en clases heredadas
   *
   * NOTA: Cuando no se especifica el nivel de acceso de una dependencia inyectada en el controlador como es el caso de 'activatedRoute'
   *       esta solo estará disponible para ese bloque de código es decir solo dentro del controlador, por esta misma razón no usaremos el this
   *       para acceder a ella, ya que no quedaría en el ámbito global de la clase
   *
   * @param router
   * @param activatedRoute
   */

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute    // -> Brinda acceso a información sobre una ruta asociada a un componente que se carga.
    //    Úselo para atravesar el árbol RouterState y extraer información de los nodos.
  ) {

    // Subscribirnos a una ruta activa nos permitirá acceder a los parametros enviados a traves de la misma
    activatedRoute.params.subscribe( params => {
      if( params[ 'term' ]) {
        this.term = params[ 'term' ];   // Asignamos el valor del parametro en la ruta a la propiedad term de la clase para visualizarlo dentro de componente de busqueda
      }
    });
  }

  // Envia los datos desde el campo de busqueda a la ruta a traves del sistema de rutas de Angular
  search( term: string ) : void {
    if( term ) {
      this.router.navigateByUrl( `search/${ term }` );    // Navega a un componente utilizando una ruta de ruta absoluta.
    }
  }

}
