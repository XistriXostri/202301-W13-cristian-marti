export function Character() {
    return (
        <li className="character col">
            <div className="card character__card">
                {/* <img
                    src="./assets/img/${character.name}.jpg"
                    alt="${character.name} ${character.family}"
                    class="character__picture card-img-top"
                    id="img${character.name}"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">
                        ${character.name} ${character.family}
                    </h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${character.age} años</li>
                            <li>
                                Estado:
                                <i
                                    class="fas fa-thumbs-down"
                                    id="down${
                                            character.name
                                        }"
                                ></i>
                                <i
                                    class="fas fa-thumbs-up"
                                    id="up${
                                            character.name
                                        }"
                                ></i>
                            </li>
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">${getFeatures(character)}</ul>
                        <div class="character__actions">
                            <button
                                class="character__action btn"
                                id="comunicate${
                                        character.name
                                    }"
                            >
                                habla
                            </button>
                            <button
                                class="character__action btn"
                                id="die${
                                        character.name
                                    }"
                            >
                                muere
                            </button>
                        </div>
                    </div>
                </div>
                <i class="emoji">${getEmoji(character)}</i> */}
            </div>
        </li>
    );
}
