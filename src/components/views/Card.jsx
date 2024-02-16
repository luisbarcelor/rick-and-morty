/* eslint-disable react/prop-types */
import "../../styles/views/Card.css"

function Card({ character }) {
    const episodeCount = character.episode.length
    const lastEpisode = character.episode[episodeCount - 1]

    return (
        <div className={"card"}>
            <div className={"card__content"}>
                <img className={"card__image"} src={character.image} alt={"No image"}/>

                <div className={"card__section"}>
                    <h2 className={"card__name"}>{character.name}</h2>
                    <p className={"card__status"}>{character.status} - {character.species}</p>
                    <h4 className={"card__subtitle"}>Last known location:</h4>
                    <p className={"card__location"}>{character.location.name}</p>
                    <h4 className={"card__location"}>First seen in:</h4>
                    <p className={"card__episode"}>{lastEpisode.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card