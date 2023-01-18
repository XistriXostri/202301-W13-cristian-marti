import { Advisor } from '../models/advisor';
import { Characters } from '../models/character';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export const charactersData: Characters = [
    new King('Joffrey', 'Baratheon', 14, 2),
    new Fighter('Jaime', 'Lannister', 34, 'Espada', 8),
    new Fighter('Daenerys', 'Targaryen', 16, 'Dragón', 10),
    new Advisor('Tyrion', 'Lannister', 27, 'Daenerys'),
    new Squire('Bronn', '', 40, 'Jaime', 1),
];
