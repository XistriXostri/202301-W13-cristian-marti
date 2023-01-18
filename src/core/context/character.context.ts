import { createContext } from 'react';
import { CharactersFeatures, CharacterFeatures } from '../models/character';

export type CharacterContextStructure = {
    characters: CharactersFeatures;
    handleDie: (characterPayload: CharacterFeatures['id']) => void;
    handleComunicate: (characterPayload: CharacterFeatures['id']) => void;
};

const initialContext: CharacterContextStructure = {
    characters: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleDie: (characterPayload: CharacterFeatures['id']) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleComunicate: (characterPayload: CharacterFeatures['id']) => {},
};

export const CharacterContext = createContext(initialContext);
