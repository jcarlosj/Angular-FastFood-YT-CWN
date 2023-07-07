import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute    // -> Brinda acceso a información sobre una ruta asociada a un componente que se carga.
                                              //    Úselo para atravesar el árbol RouterState y extraer información de los nodos.
  ) {

    // Subscribirnos a una ruta activa nos permitirá acceder a los parametros enviados a traves de la misma
    this.activatedRoute.params.subscribe( params => {

      // Si encuentra termino de busqueda filtra resultados
      if( params[ 'term' ] ) {
        // NOTA: Si deseamos usar la sintaxis punto en params[ 'term' ] debemos deshabilitar en el archivo tsconfig.json la siguiente propiedad:
        //       "noPropertyAccessFromIndexSignature" (sin acceso a la propiedad desde la firma del índice) poniendola en false.

        this.foods = this.foodService.getAllBySearchTerm( params[ 'term' ] );
      }
      else {
        // Si no muestra todos los resultados
        this.foods = foodService.getAll();
      }

    });

  }

}
