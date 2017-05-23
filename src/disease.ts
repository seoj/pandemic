export class Disease {
    color: Color;
    cured: boolean;

    constructor(color: Color, cured = false) {
        this.color = color;
        this.cured = cured;
    }
}

export enum Color {
    BLACK,
    BLUE,
    RED,
    YELLOW,
}
