import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: Tag[];

  /** Especificación de Acceso en TypeScript
   * public - puede acceder a los miembros desde fuera de la clase.
   * private - NO puede acceder a los miembros (o verlos) desde fuera de la clase
   * protected - NO puede acceder a los miembros desde fuera de la clase, sin embargo, se puede acceder a ellos en clases heredadas
   *
   * NOTA: Cuando no se especifica el nivel de acceso de una dependencia inyectada en el controlador como es el caso de 'activatedRoute'
   *       esta solo estará disponible para ese bloque de código es decir solo dentro del controlador, por esta misma razón no usaremos el this
   *       para acceder a ella, ya que no quedaría en el ámbito global de la clase
   *
   * @param foodService
   */

  constructor(
    foodService: FoodService
  ) {
    this.tags = foodService.getAllTags();
  }
}
