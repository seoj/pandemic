import { City } from './city';

export class Card {
    type: CardType;
    city: City;
    eventType: EventType;

    constructor(type: CardType, city?: City, eventType?: EventType) {
        this.type = type;
        this.city = city;
        this.eventType = eventType;
    }
}

export enum CardType {
    CITY,
    EPIDEMIC,
    EVENT,
    INFECTION,
}

export enum EventType {
    AIRLIFT,
    FORECAST,
    GOVERNMENT_GRANT,
    ONE_QUIET_NIGHT,
    RESILIENT_POPULATION,
}
