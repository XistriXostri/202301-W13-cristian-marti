import { CharacterContext } from './character.context';

const context = {
    character = [],
};

export function NoteContextProvider({ children }: { children: JSX.Element }) {
    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
