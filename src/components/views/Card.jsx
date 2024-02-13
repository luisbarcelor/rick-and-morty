function Card({ character }) {
    const episodeCount = character.episode.length
    const lastEpisode = character.episode[episodeCount - 1]

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
                <p>{character.location.name}</p>
            </section>
            <section>
                <h6>First seen in:</h6>
                <p>{lastEpisode.name}</p>
            </section>
        </div>
    );
}
export default Card