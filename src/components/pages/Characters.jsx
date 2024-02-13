import {useState} from "react";
import CharacterCards from "../views/CharacterCards.jsx";

function Characters() {
    const [pageNumber, setPageNumber] = useState(1)
    const previousPage = () => {
        if (pageNumber > 1)
            setPageNumber(pageNumber - 1)
    }
    const nextPage = () => {
        if (pageNumber < 42)
            setPageNumber(pageNumber + 1);
    }

    return (
        <>
            <div className={"characters"}>
                <button type={"button"} onClick={previousPage}>
                    Previous Page
                </button>
                <button type={"button"} onClick={nextPage}>
                    Next Page
                </button>
                <br/>
                <br/>
                <CharacterCards pageNumber={pageNumber}/>
            </div>
        </>
    )
}

export default Characters