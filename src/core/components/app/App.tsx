import { List } from '../list/list';
import { useContext } from 'react';
import { CharacterContext } from '../../context/character.context';

export function App() {
    const { characters } = useContext(CharacterContext);

    const talkativeCharacter = characters.find(
        (character) => character.comunicate
    );

    return (
        <>
            <div className="app container">
                <List></List>
            </div>
            <div
                className={
                    talkativeCharacter ? 'comunications on' : 'comunications'
                }
            >
                <p className="comunications__text display-1">
                    {talkativeCharacter?.message}
                </p>
                <img
                    className="comunications__picture"
                    src={talkativeCharacter?.img}
                    alt={(talkativeCharacter?.name, talkativeCharacter?.family)}
                ></img>
            </div>
        </>
    );
}

export default App;
