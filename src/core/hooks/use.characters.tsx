import { useReducer } from 'react';
import { getCharactersData } from '../data/characters.data';
import { CharacterFeatures, CharactersFeatures } from '../models/character';
import { characterUpdateCreator } from '../reducers/action.creators';

export type UseCharacters = {
    getCharacters: () => CharactersFeatures;
    handleUpdate: (characterPayload: CharacterFeatures['id']) => void;
};

export function useCharacters(): UseCharacters {
    const initialState: CharactersFeatures = getCharactersData();
    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const getCharacters = () => characters;
    console.log('LOAD hook');
    const handleUpdate = (characterPayload: CharacterFeatures['id']) => {
        dispatch(characterUpdateCreator(characterPayload));
    };
}
