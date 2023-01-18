import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { Item } from '../item/item';

export function List() {
    const { characters } = useContext(CharacterContext);

    return (
        <ul className="characters-list row list-unstyled">
            {characters.map((character) => {
                return (
                    <li key={character.id} className="character col">
                        <Item character={character}></Item>
                    </li>
                );
            })}
        </ul>
    );
}
