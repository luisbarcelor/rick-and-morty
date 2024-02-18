/* eslint-disable react/prop-types */
import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "../../utils/GaphqlQueries.jsx";
import Card from "../views/Card.jsx";

function CharacterCards({ pageNumber }) {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: pageNumber }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            {data.characters.results.map((item) => (
                <Card character={item} key={item.id}></Card>
            ))}
        </>
    )
}

export default CharacterCards