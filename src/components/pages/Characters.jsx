import CharacterCards from "../views/CharacterCards.jsx";
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
        <div className={"container"}>
            <section className={"header"}>
                <h1 className={"header__title"}>Interdimensional Character Showcase</h1>
                <p className={"header__text"}>Meet the Wacky Cast of Rick and Morty</p>
                <div className={"characters-nav"}>
                    <button className={"characters-nav__btn"} type={"button"} onClick={previousPage}>
                        Previous Page
                    </button>
                    <button className={"characters-nav__btn"} type={"button"} onClick={nextPage}>
                        Next Page
                    </button>
                </div>
            </section>

            <section className={"card-grid"}>
                <CharacterCards pageNumber={page}/>
            </section>

        </div>
    )
}

export default Characters