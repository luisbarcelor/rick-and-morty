function Card({ character }) {
    const episodeCount = character.episode.length
    const lastEpisode = character.episode[episodeCount - 1]

    return (
        <div className={"card"}>
            <img className={"card__image"} src={character.image}  alt={"No image"}/>
            <section className={"card__section"}>
                <h2 className={"card__name"}>{character.name}</h2>
                <p className={"card__status"}>{character.status} - {character.species}</p>
            </section>
            <section className={"card__section"}>
                <h4 className={"card__subtitle"}>Last known location:</h4>
                <p className={"card__location"}>{character.location.name}</p>
            </section>
            <section className={"card__section"}>
                <h4 className={"card__location"}>First seen in:</h4>
                <p className={"card__episode"}>{lastEpisode.name}</p>
            </section>
        </div>
    );
}

export default Card