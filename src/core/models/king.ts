import { Character } from './character';
export class King extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        public regnalYears: number
    ) {
        super(name, family, age);
        this.message = 'Vais a morir todos';
        this.emoji = '👑';
    }
}
