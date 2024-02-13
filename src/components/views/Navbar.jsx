import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className={"navbar"}>
                <div className={"logo"}></div>
                <div className={"container"}>
                    <ul>
                        <li><Link to={"/home"}>Home</Link> </li>
                        <li><Link to={"/characters"}>Characters</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar