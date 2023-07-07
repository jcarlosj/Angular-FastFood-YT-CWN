import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';


export const sample_food: Food[] = [
  {
    id:'1',
    name: 'pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['fastfoot', 'pizza', 'lunch'],
  },
  {
    id:'2',
    name: 'Meatball',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['slowfood', 'lunch'],
  },
  {
    id:'3',
    name: 'hamburger',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['fastfoot', 'hamburger'],
  },
  {
    id:'4',
    name: 'Fried Potatoes',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['fastfoot', 'fry'],
  },
  {
    id:'5',
    name: 'Chicken soup',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['slowfood', 'soup'],
  },
  {
    id:'6',
    name: 'Vegetables pizza',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['fastfoot', 'pizza', 'lunch'],
  },
];


export const sample_tags: Tag[] = [
  { name: 'all', count: 6 },
  { name: 'fastfoot', count: 4 },
  { name: 'pizza', count: 2 },
  { name: 'lunch', count: 0 },
  { name: 'slowfood', count: 2 },
  { name: 'hamburger', count: 1 },
  { name: 'fry', count: 1 },
  { name: 'soup', count: 1 }
];
