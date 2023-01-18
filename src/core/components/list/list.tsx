import { getCharactersData } from '../../data/characters.data';
import { Item } from '../item/item';

export function List() {
    const characters = getCharactersData();
    console.log(characters);
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
