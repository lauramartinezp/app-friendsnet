import { Item } from './item.model';

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Rosa',
    'description': 'These item is the best one',
    'price': 12.30,
    'stock': 5,
    'image': '../assets/rosa.jpg',
    'selected': false,
    'quantity': 0
},
{
    'id': 2,
    'name': 'Lirio',
    'description': 'These item is the second one',
    'price': 10,
    'stock': 3,
    'image': '../assets/lirio.jpg',
    'selected': false,
    'quantity': 0
},
{
    'id': 3,
    'name': 'Dalia',
    'description': 'These item is the most sell',
    'price': 8.60,
    'stock': 0,
    'image': '../assets/dalia.jpg',
    'selected': false,
    'quantity': 0
}];
