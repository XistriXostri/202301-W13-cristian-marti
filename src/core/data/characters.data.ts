import { Advisor } from '../models/advisor';
import { CharactersOptions } from '../models/character';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export const charactersData: CharactersOptions = [
    new King('Joffrey', 'Baratheon', 14, 2),
    new Fighter('Jaime', 'Lannister', 34, 'Espada', 8),
    new Fighter('Daenerys', 'Targaryen', 16, 'Dragón', 10),
    new Advisor('Tyrion', 'Lannister', 27, 'Daenerys'),
    new Squire('Bronn', '', 40, 'Jaime', 1),
];

export const getCharactersData = () => charactersData;
