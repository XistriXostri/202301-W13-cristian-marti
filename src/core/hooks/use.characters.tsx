import { useReducer } from 'react';
import { getCharactersData } from '../data/characters.data';
import { CharacterFeatures, CharactersFeatures } from '../models/character';
import { characterDieCreator } from '../reducers/action.creators';
import { characterReducer } from '../reducers/character.reducer';

export type UseCharacters = {
    getCharacters: () => CharactersFeatures;
    handleDie: (characterPayload: CharacterFeatures['id']) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersFeatures = getCharactersData();
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const getCharacters = () => characters;
    console.log('LOAD hook');
    const handleDie = (characterPayload: CharacterFeatures['id']) => {
        dispatch(characterDieCreator(characterPayload));
    };

    return {
        getCharacters,
        handleDie,
    };
}
