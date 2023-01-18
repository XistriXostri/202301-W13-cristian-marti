import { getCharactersData } from '../../data/characters.data';

export function List() {
    const characters = getCharactersData();
    console.log(characters);
    return <ul className="characters-list row list-unstyled">Personaje</ul>;
}
