import { useMemo } from 'react';
import { CharacterContext } from './character.context';
import { useCharacters } from '../hooks/use.characters';

export function CharacterContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { getCharacters, handleDie, handleComunicate } = useCharacters();

    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleDie,
            handleComunicate,
        }),
        [getCharacters, handleDie, handleComunicate]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
