import CharacterCards from "../views/CharacterCards.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Notfound from "./Notfound.jsx";
import "../../styles/pages/Characters.css"
import {useEffect, useRef, useState} from "react";
import {validate} from "../services/ValidationService.js";
import SearchField from "../views/SearchField.jsx";

function Characters() {
    const navigate = useNavigate();
    const searchValue = useRef("");
    const randomPage = useRef(Math.floor((Math.random() * 42) + 1));
    const { page= randomPage.current} = useParams();
    const pageNum = Number(page)

    //TODO: Fix navigate bug after successful search

    const previousPage = () => {
        searchValue.current = "";
        if (pageNum > 1)
            navigate(`/characters/${pageNum - 1}`)
    }
    const nextPage = () => {
        searchValue.current = "";
        if (pageNum < 42)
            navigate(`/characters/${pageNum + 1}`)
    }

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.target.type === 'button') {
            event.preventDefault();
            const validationStatus= validate("search-warning", searchValue.current);

            if (validationStatus) {
                navigate("/characters")
            }
        }
    }

    if (pageNum > 42 || pageNum < 1) return <Notfound />

    return (
        <div className={"characters-container"}>
            <section className={"characters-header"}>
                <div className={"characters-header__content"}>
                    <h1 className={"characters-header__title"}>Interdimensional Character Showcase</h1>
                    <p className={"characters-header__text"}>Meet the Wacky Cast of Rick and Morty</p>
                </div>
            </section>

            <section className="characters-main">
                <div className={"characters-main__nav"}>
                    <h1 className={"characters-main__title"}>Wubba lubba dub dub!</h1>
                    <form className={"characters-main__search-form"}>
                        <SearchField onKeyDown={handleSearch} searchRef={searchValue}/>
                        <button className={"btn characters-main__btn characters-main__btn--search"} type={"button"}
                                onClick={handleSearch}>
                            Search
                        </button>
                    </form>
                    <p id={"search-warning"} className={"characters-main__form-warning hidden-element"}>Enter a search term</p>
                    <div className={"characters-main__btn-container"}>
                        <button className={"characters-main__btn btn--secondary"} type={"button"}
                                onClick={previousPage}>
                            Previous Page
                        </button>
                        <button className={"characters-main__btn btn--secondary"} type={"button"} onClick={nextPage}>
                            Next Page
                        </button>
                    </div>
                </div>
                <div className={"characters-main__card-grid"}>
                    <CharacterCards pageNumber={pageNum} searchTerm={searchValue.current}/>
                </div>
            </section>
        </div>
    )
}

export default Characters