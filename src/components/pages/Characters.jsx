import CharacterCards from "../services/CharacterCards.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Notfound from "./Notfound.jsx";
import "../../styles/pages/Characters.css"
import SearchCards from "../services/SearchCards.jsx";
import {useState} from "react";

function Characters() {
    const randomPage = Math.floor((Math.random() * 42) + 1);
    const [searchValue, setSearchValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const { pageNum = randomPage } = useParams();
    const navigate = useNavigate();
    const page = Number(pageNum);

    //TODO: Fix navigate bug after successful search

    const previousPage = () => {
        if (page > 1) {
            navigate(`/characters/${page - 1}`)
        }
    }
    const nextPage = () => {
        if (page < 42)
            navigate(`/characters/${page + 1}`)
    }

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
        setIsSearching(false);
    }
    const handleSearch = () => {
        navigate("/characters")
        setIsSearching(validate("search-warning", searchValue));
    }

    const validate = (validationElementId, searchTerm) => {
        const searchWarning = document.getElementById(validationElementId);
        let status = false

        if (searchTerm === "") {
            searchWarning.classList.add("visible-element")
        } else {
            searchWarning.classList.remove("visible-element")
            status = true;
        }

        return status;
    }

    if (page > 42 || page < 1) return <Notfound />

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
                        <input className={"characters-main__input"} placeholder={"Search character"} value={searchValue}
                               onChange={handleSearchInput}/>
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
                    {isSearching ? (
                        <SearchCards searchTerm={searchValue}/>
                    ) : (
                        <CharacterCards pageNumber={page}/>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Characters