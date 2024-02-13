import { CharactersService } from "../../services/CharactersService.jsx";
import Card from "../views/Card.jsx";
import {useState} from "react";

function Characters() {
    const [page, setPage] = useState(1);
    const { loading, error, characters} = CharactersService.getCharacters(page);

    const nextPage = () => {
        if (page < 42) {
            console.log("next" + page)
            setPage(page + 1)
            console.log("next" + page)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            console.log("previous" + page)
            setPage(page - 1)
            console.log("previous" + page)
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <div className={"characters"}>
                <button onClick={previousPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
                <br/>
                <br/>
                {characters.results.map((item, index) => (
                    <Card key={index} character={item}></Card>
                ))}
            </div>
        </>
    )
}

export default Characters