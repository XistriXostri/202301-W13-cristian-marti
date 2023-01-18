import { createContext } from 'react';
import { CharactersFeatures, CharacterFeatures } from '../models/character';

type CharacterContextStructure = {
    characters: CharactersFeatures;
    handleDie: (characterPayload: CharacterFeatures['id']) => void;
};

const initialContext: CharacterContextStructure = {
    characters: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleDie: (characterPayload: CharacterFeatures['id']) => {},
};

export const CharacterContext = createContext(initialContext);
