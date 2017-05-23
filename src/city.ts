import { Disease } from './disease';

export class City {
    name: string;
    connections: City[] = [];
    disease: Disease;
    infections = 0;
    station = false;

    constructor(name: string, disease: Disease) {
        this.name = name;
        this.disease = disease;
    }
}
