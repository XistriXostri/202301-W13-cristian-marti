import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';
import { King } from '../models/king';
import { Squire } from '../models/squire';

export const mockFighter = new Fighter(
    'Daenerys',
    'Targaryen',
    16,
    'Dragón',
    10
);
export const mockAdvisor = new Advisor('Tyrion', 'Lannister', 27, 'Daenerys');

export const mockKing = new King('Joffrey', 'Baratheon', 14, 2);

export const mockSquire = new Squire('Bronn', '', 40, 'Jaime', 1);

export const mockCharacters = [mockFighter, mockAdvisor];
