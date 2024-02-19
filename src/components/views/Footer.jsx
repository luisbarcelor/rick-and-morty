import "../../styles/views/Footer.css";
import rick from "../../../public/rick.svg";

function Footer() {

    return (
        <div className={"footer-container"}>
            <div className={"footer-container__inner"}>
                <div className={"footer-container__logo-holder"}>
                    <a className={"logo"} href={"/home"}>
                        <img className={"logo__image"} src={rick} alt={"No logo"}/>
                        <h2 className={"logo__title logo__title--dark-bg"}>Quantum Rick</h2>
                    </a>
                </div>
                <div className={"footer-container__text"}>
                    <div className={"footer-container__contact"}>
                        <h2 className={"footer-container__title"}>Contact</h2>
                        <ul className={"footer-container__list"}>
                            <li className={"footer-container__list-item"}>+1 234 567 890</li>
                            <li className={"footer-container__list-item"}>info@gmail.com</li>
                            <li className={"footer-container__list-item"}>Github</li>
                        </ul>
                    </div>
                    <div className={"footer-container__about"}>
                        <h2 className={"footer-container__title"}>About Us</h2>
                        <p className={"footer-container__paragraph"}>
                            Hey there! I&apos;m a junior software engineer, currently part of an awesome team
                            at a forward-thinking company. I&apos;m all about building cool stuff that actually
                            works. I&apos;m passionate about coding and love diving into projects with
                            my teammates. Learning new things is my jam, so I&apos;m always exploring
                            the latest in tech. Beyond work, you&apos;ll find me geeking out over
                            new gadgets, enjoying a good coffee, and connecting
                            with fellow tech enthusiasts.
                        </p>
                    </div>
                    <ul className={"footer-container__menu"}>
                        <li className={"footer-container__menu-item"}>
                            <a className={"footer-container__menu-link"} href={"/home"}>Home</a>
                        </li>
                        <li className={"footer-container__menu-item"}>
                            <a className={"footer-container__menu-link"} href={"/characters"}>Characters</a>
                        </li>
                        <li className={"footer-container__menu-item"}>
                            <a className={"footer-container__menu-link"} href={"/home"}>Merch</a>
                        </li>
                    </ul>
                </div>
                <div className={"footer-container__copyright"}>
                    Copyright&copy;
                    <a className={"footer-container__copyright-link"} href={"https://github.com/luisbarcelor"}>
                        Luis Barceló
                    </a> 2024
                </div>
            </div>
        </div>
    );
}

export default Footer;