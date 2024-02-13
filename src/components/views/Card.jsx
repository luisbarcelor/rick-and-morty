import {useEffect, useState} from "react";

function Card(props) {
    const [character, setCharacter] = useState(props.character);

    useEffect(() => {
        setCharacter(props.character);
    }, [character]);

    return (
        <div className={"card"}>
            <section>
                <img src={character.image}  alt={"No image"}/>
            </section>
            <section>
                <h2>{character.name}</h2>
                <p>{character.status} - {character.species}</p>
            </section>
            <section>
                <h6>Last known location:</h6>
                <p>{character.location}</p>
            </section>
            <section>
                <h6>First seen in:</h6>
                <p>{character.episode}</p>
            </section>
        </div>
    );
}

export default Card