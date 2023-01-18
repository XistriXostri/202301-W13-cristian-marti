import { Character } from './character';
export class Squire extends Character {
    public characterHeServes: string;

    constructor(
        name: string,
        family: string,
        age: number,
        characterHeServes: string,
        public fidelity: number
    ) {
        super(name, family, age);
        this.characterHeServes = characterHeServes;
        this.message = 'Soy un loser';
        this.emoji = '🛡';
    }
}
