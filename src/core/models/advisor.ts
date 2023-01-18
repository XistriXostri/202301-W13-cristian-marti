import { Character } from './character';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export class Advisor extends Character {
    constructor(
        name: string,
        family: string,
        age: number,
        public advises: Fighter | King | Advisor | Squire
    ) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.emoji = '🎓';
    }
}
