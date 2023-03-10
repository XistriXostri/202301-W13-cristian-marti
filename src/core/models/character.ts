export type CharacterStructure = {
    isAlive: boolean;
    tvShow: string;
    name: string;
    family: string;
    age: number;
    img: string;
    message: string;
    emoji: string;
    id: string;
    comunicate: boolean;
};

export class Character implements CharacterStructure {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    public id: string;
    public message: string;
    public emoji: string;
    public isAlive: boolean;
    public tvShow: string;
    public img: string;
    public comunicate: boolean;
    constructor(
        public name: string,
        public family: string,
        public age: number
    ) {
        this.id = Character.generateId();
        this.isAlive = true;
        this.message = '';
        this.tvShow = 'Game of Thrones';
        this.img = `./assets/img/${this.name}.jpg`;
        this.emoji = '';
        this.comunicate = false;
    }
}

export type CharacterFeatures = {
    isAlive: boolean;
    tvShow: string;
    name: string;
    family: string;
    age: number;
    img: string;
    message: string;
    emoji: string;
    id: string;
    comunicate: boolean;
    characterHeAdvises?: string;
    weapon?: string;
    skill?: number;
    regnalYears?: number;
    characterHeServes?: string;
    fidelity?: number;
};

export type CharactersFeatures = Array<CharacterFeatures>;
