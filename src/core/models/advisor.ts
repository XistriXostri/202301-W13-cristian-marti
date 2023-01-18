import { Character } from './character';

export class Advisor extends Character {
    public characterHeAdvises: string;
    constructor(
        name: string,
        family: string,
        age: number,
        characterHeAdvises: string
    ) {
        super(name, family, age);
        this.message = 'No sé por qué, pero creo que voy a morir pronto';
        this.emoji = '🎓';
        this.characterHeAdvises = characterHeAdvises;
    }
}
