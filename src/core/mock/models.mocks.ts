import { Advisor } from '../models/advisor';
import { Fighter } from '../models/fighter';

export const mockFighter = new Fighter(
    'Daenerys',
    'Targaryen',
    16,
    'Dragón',
    10
);
export const mockAdvisor = new Advisor('Tyrion', 'Lannister', 27, 'Daenerys');
