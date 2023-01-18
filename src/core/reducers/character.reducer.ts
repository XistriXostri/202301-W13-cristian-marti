import { CharactersFeatures } from '../models/character';
import { CharacterAction } from './action.creators';
import { characterActionTypes } from './action.types';

export function characterReducer(
    state: CharactersFeatures,
    action: CharacterAction
): CharactersFeatures {
    switch (action.type) {
        case characterActionTypes.die:
            const diedCharacter = action.payload;
            const updatedCharacters = state.map((item) => {
                if (item.id === diedCharacter) {
                    return {
                        ...item,
                        isAlive: false,
                    };
                }
                return item;
            });
            return updatedCharacters;

        case characterActionTypes.comunicate:
            const talkingCharacter = action.payload;
            const newCharacters = state.map((item) => {
                if (item.id === talkingCharacter) {
                    console.log(item.name, 'comunicate', item.comunicate);
                    return {
                        ...item,
                        comunicate: !item.comunicate,
                    };
                }
                return item;
            });
            return newCharacters;
        default:
            return [...state];
    }
}
