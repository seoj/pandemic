import { Card } from './card';
import { City } from './city';

export class Player {
    name: string;
    actions: number;
    location: City;
    cards: Card[] = [];
}
