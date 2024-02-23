/* eslint-disable react/prop-types */
import CharactersService from "../services/CharactersService.js";
import Card from "./Card.jsx";
import {useEffect, useState} from "react";

function CharacterCards({ pageNumber }) {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    useEffect( () => {
        CharactersService.getCharacters(pageNumber)
            .then(response=> response.json())
            .then(data => setData(data))
            .catch(error => setError(error));
    }, [])


    // if (data || error) setLoading(false)
    // if (loading) return <p>Loading...</p>
    if (error) return <p>Error! {error.message}</p>

    return (
        <>
            {data.characters.results.map((item) => (
                <Card character={item} key={item.id}></Card>
            ))}
        </>
    )
}

export default CharacterCards