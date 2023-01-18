import { Fighter } from './fighter';
import { Character } from './character';
export class Squire extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        public serve: Fighter,
        public fidelity: number
    ) {
        super(name, family, age);
        this.message = 'Soy un loser';
        this.emoji = '🛡';
    }
}
