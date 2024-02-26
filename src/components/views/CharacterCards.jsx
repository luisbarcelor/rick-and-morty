/* eslint-disable react/prop-types */
import CharactersService from "../../services/CharactersService.js";
import Card from "./Card.jsx";
import {useEffect, useState} from "react";

function CharacterCards({ pageNumber, searchTerm }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {
        setLoading(true)
        if (searchTerm !== "") {
            CharactersService.searchCharacters(searchTerm)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false));
        } else {
            CharactersService.getCharacters(pageNumber)
                .then(response=> response.json())
                .then(data => setData(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false));
        }
    }, [pageNumber, searchTerm])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error! {error.message}</p>

    return (
        <>
            {data.data.characters.results.map((item) => (
                <Card character={item} key={item.id}></Card>
            ))}
        </>
    )
}

export default CharacterCards