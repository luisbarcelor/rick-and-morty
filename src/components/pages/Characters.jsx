import CharacterCards from "../services/CharacterCards.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Notfound from "./Notfound.jsx";
import "../../styles/pages/Characters.css"

function Characters() {
    const { pageNum = 1} = useParams()
    const navigate = useNavigate()
    const page = Number(pageNum)

    const previousPage = () => {
        if (page > 1)
            navigate(`/characters/${page - 1}`)
    }

    const nextPage = () => {
        if (page < 42)
            navigate(`/characters/${page + 1}`)
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
                    <form className={"characters-main__search-form"}>
                        <input className={"characters-main__input"} placeholder={"Search character"}/>
                        <button className={"btn characters-main__btn characters-main__btn--search"} type={"button"}>
                            Search
                        </button>
                    </form>
                    <div className={"characters-main__btn-container"}>
                        <button className={"characters-main__btn btn--secondary"} type={"button"} onClick={previousPage}>
                            Previous Page
                        </button>
                        <button className={"characters-main__btn btn--secondary"} type={"button"} onClick={nextPage}>
                            Next Page
                        </button>
                    </div>
                </div>

                <div className={"characters-main__card-grid"}>
                    <CharacterCards pageNumber={page}/>
                </div>
            </section>
        </div>
    )
}

export default Characters