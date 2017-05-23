import { Card } from './card';

export class Deck {
    cards: Card[] = [];

    add(card: Card) {
        this.cards.push(card);
    }
}