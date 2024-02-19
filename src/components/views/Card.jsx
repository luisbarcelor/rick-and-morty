/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/views/Card.css"

function Card({ character }) {
    const episodeCount = character.episode.length
    const lastEpisode = character.episode[episodeCount - 1]

    return (
        <div className={"card"}>
            <img className={"card__image"} src={character.image} alt={"No logo"}/>

            <div className={"card__text"}>
                <h2 className={"card__name"}>{character.name}</h2>
                <p className={"card__status"}>{character.status} - {character.species}</p>
                <h4 className={"card__subtitle"}>Last known location:</h4>
                <p className={"card__location"}>{character.location.name}</p>
                <h4 className={"card__subtitle"}>First seen in:</h4>
                <p className={"card__episode"}>{lastEpisode.name}</p>
            </div>
            <div className={"card__btn-holder"}>
                <Link to={"/"} className={"card__btn btn"}>
                    Learn more
                </Link>
            </div>
        </div>
    );
}

export default Card