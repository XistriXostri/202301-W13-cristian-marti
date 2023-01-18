import { SyntheticEvent, useContext } from 'react';
import { CharacterContext } from '../../context/character.context';
import { Advisor } from '../../models/advisor';
import { CharacterFeatures } from '../../models/character';
import { Fighter } from '../../models/fighter';
import { King } from '../../models/king';
import { Squire } from '../../models/squire';

export function Item({ character }: { character: CharacterFeatures }) {
    const { handleDie } = useContext(CharacterContext);

    const handleClick = (event: SyntheticEvent) => {
        const action = (event.target as HTMLElement).id;
        switch (action) {
            case 'comunicate':
                break;
            case 'die':
                handleDie(character.id);
                break;
        }
    };
    const getFeatures = (character: CharacterFeatures) => {
        if (character instanceof King)
            return (
                <>
                    <li>Años de reinado: {character.regnalYears}</li>
                </>
            );
        if (character instanceof Fighter) {
            return (
                <>
                    <li>Arma: {character.weapon}</li>
                    <li>Destreza: {character.skill}</li>
                </>
            );
        }
        if (character instanceof Advisor)
            return (
                <>
                    <li>Asesora a: {character.characterHeAdvises}</li>
                </>
            );
        if (character instanceof Squire) {
            return (
                <>
                    <li>Peloteo: {character.fidelity}</li>
                    <li>Sirve a: {character.characterHeServes}</li>
                </>
            );
        }
    };

    return (
        <>
            <div className="card character__card">
                <img
                    src={character.img}
                    alt={character.name + ' ' + character.family}
                    className={
                        character.isAlive
                            ? 'character__picture card-img-top'
                            : 'character__picture card-img-top character__picture--death'
                    }
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {character.name} {character.family}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {character.age} años</li>
                            <li>
                                Estado:{' '}
                                {character.isAlive ? (
                                    <i
                                        className="fas fa-thumbs-up"
                                        id={'up' + character.name}
                                    ></i>
                                ) : (
                                    <i
                                        className="fas fa-thumbs-down"
                                        id={'down' + character.name}
                                    ></i>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="character__overlay">
                        <ul className="list-unstyled">
                            {getFeatures(character)}
                        </ul>
                        <div className="character__actions">
                            {character.isAlive && (
                                <button
                                    className="character__action btn"
                                    id="comunicate"
                                >
                                    habla
                                </button>
                            )}

                            {character.isAlive && (
                                <button
                                    onClick={handleClick}
                                    className="character__action btn"
                                    id="die"
                                >
                                    muere
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <i className="emoji">{character.emoji}</i>
            </div>
        </>
    );
}

/*
                           
*/
