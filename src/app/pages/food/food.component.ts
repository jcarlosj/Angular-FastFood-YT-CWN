import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  food!: Food;

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute    // -> Brinda acceso a información sobre una ruta asociada a un componente que se carga.                                              //    Úselo para atravesar el árbol RouterState y extraer información de los nodos.
  ) {
    activatedRoute.params.subscribe( params => {
      if( params[ 'id' ]) {
        this.food = foodService.getFoodById( params[ 'id' ]);
      }
    });
  }
}
