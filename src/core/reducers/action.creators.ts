import { Character } from '../models/character';
import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: Character['id'];
};

export const characterDieCreator = (
    payload: Character['id']
): CharacterAction => ({
    type: characterActionTypes.die,
    payload,
});

export const characterComunicateCreator = (
    payload: Character['id']
): CharacterAction => ({
    type: characterActionTypes.comunicate,
    payload,
});
