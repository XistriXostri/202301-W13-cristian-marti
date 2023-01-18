import { createContext } from 'react';
import { CharactersFeatures, CharacterFeatures } from '../models/character';

//tipado
type CharacterContextStructure = {
    characters: CharactersFeatures;
    handleUpdate: (characterPayload: CharacterFeatures['id']) => void;
};

const initialContext: CharacterContextStructure = {
    characters: [],
    handleUpdate: (characterPayload: CharacterFeatures['id']) => {},
};

export const NoteContext = createContext(initialContext);
