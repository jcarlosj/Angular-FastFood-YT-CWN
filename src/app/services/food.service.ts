import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

import { sample_food, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() : Food[] {
    return sample_food;
  }

  getAllBySearchTerm( term : string ) : Food[] {
    return this.getAll().filter( food => food.name.toLowerCase().includes( term.toLowerCase() ) );
  }

  getAllTags() : Tag[] {
    return sample_tags;
  }

  getAllByTag( tag : string ) : Food[] {
    return tag == 'all'
      ?   this.getAll()
      :   this.getAll().filter( food => food.tags?.includes( tag ) );
  }

  getFoodById( foodId: string ) : Food {
    return this.getAll().find( food => food.id === foodId ) ?? new Food();
  }

}
