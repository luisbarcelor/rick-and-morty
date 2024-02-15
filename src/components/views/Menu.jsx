import "../../styles/views/Menu.css";
import rick from "../../assets/rick.svg";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav className={"menu"}>
            <a className={"menu__logo-link"} href={"/home"}>
                <img className={"menu__logo"} src={rick} alt={"No logo"}/>
                <h2 className={"menu__title"}>Rick n&apos; Roll</h2>
            </a>
            <ul className={"menu__list"}>
                <li className={"menu__item"}>
                    <Link className={"menu__link"} to={"/home"}>Home</Link>
                </li>
                <li className={"menu__item"}>
                    <Link className={"menu__link"} to={"/characters"}>Characters</Link>
                </li>
                <li className={"menu__item"}>
                    <Link className={"menu__link menu__link--btn"} to={"/about"}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu