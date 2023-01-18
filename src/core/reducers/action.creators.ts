import { Character } from '../models/character';
import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: Character['id'];
};

export const characterUpdateCreator = (
    payload: Character['id']
): CharacterAction => ({
    type: characterActionTypes.update,
    payload,
});
