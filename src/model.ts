import { Card, CardType, EventType } from './card';
import { CITIES } from './cities';
import { City } from './city';
import { Disease, Color } from './disease';
import { Player } from './player';
import { Deck } from './deck';

const configuration = {
    infectionRates: [2, 2, 2, 3, 3, 4, 4],
    playerHandSizes: { 2: 4, 3: 3, 4: 2 }
};

export class Model {
    players: Player[];
    diseases: { [color: number]: Disease } = {};
    cities: { [name: string]: City } = {};
    playerDeck = new Deck();
    playerDiscard = new Deck();
    infectionDeck = new Deck();
    infectionDiscard = new Deck();
    outbreakLevel = 0;
    infectionLevel = 0;

    constructor() {
        this.initDiseases();
        this.initCities();
        this.initPlayerDeck();
        this.initInfectionDeck();
    }

    private initDiseases() {
        Object
            .keys(Color)
            .map(key => Color[key] as Color)
            .filter(color => typeof color === 'number')
            .forEach(color => {
                this.diseases[color] = new Disease(color);
            });
    }

    private initCities() {
        CITIES.forEach(data => {
            this.cities[data.name] =
                new City(data.name, this.diseases[data.color]);
        });
    }

    private initPlayerDeck() {
        for (const cityName in this.cities) {
            this.playerDeck
                .add(new Card(CardType.CITY, this.cities[cityName]));
        }

        Object
            .keys(EventType)
            .map(key => EventType[key] as EventType)
            .filter(eventType => typeof eventType === 'number')
            .forEach(eventType => {
                this.playerDeck
                    .add(new Card(CardType.EVENT, undefined, eventType))
            });
    }

    private initInfectionDeck() {
        for (const cityName in this.cities) {
            this.playerDeck
                .add(new Card(CardType.INFECTION, this.cities[cityName]));
        }
    }
}
