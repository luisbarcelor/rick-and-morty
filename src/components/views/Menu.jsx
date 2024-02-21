import "../../styles/views/Menu.css";
import rick from "../../../public/rick.svg";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav className={"menu"}>
            <a className={"logo"} href={"/home"}>
                <img className={"logo__image"} src={rick} alt={"No logo"}/>
                <h2 className={"logo__title"}>Quantum Rick</h2>
            </a>
            <ul className={"menu__list"}>
                <li className={"menu__item"}>
                    <Link className={"menu__link"} to={"/home"}>Home</Link>
                </li>
                <li className={"menu__item"}>
                    <Link className={"menu__link"} to={"/characters"}>Characters</Link>
                </li>
                <li className={"menu__item"}>
                    <Link className={"menu__link"} to={"/merch"}>Merch</Link>
                </li>
                <li className={"menu__item"}>
                    <a className={"btn"} href={"/about"}>About Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu