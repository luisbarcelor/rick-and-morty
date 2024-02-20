import "../../styles/views/Footer.css";
import rick from "../../../public/rick.svg";
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"
import github from "../../assets/github.svg"

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
                            <li className={"footer-container__list-item"}>
                                <img className={"footer-container__icon"} src={phone} alt={"No icon"}/>
                                <span className={"footer-container__list-text"}>+34 722 11 65 25</span>
                            </li>
                            <li className={"footer-container__list-item"}>
                                <img className={"footer-container__icon"} src={mail} alt={"No icon"}/>
                                <span className={"footer-container__list-text"}>luisbarcelor@hotmail.com</span>
                            </li>
                            <li className={"footer-container__list-item"}>
                                <img className={"footer-container__icon"} src={github} alt={"No icon"}/>
                                <a className={"footer-container__list-text footer-container__link"}
                                   href={"https://github.com/luisbarcelor"}>
                                    https://github.com/luisbarcelor
                                </a>
                            </li>
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
                </div>
            </div>
            <ul className={"footer-container__menu"}>
                <li className={"footer-container__menu-item"}>
                    <a className={"footer-container__link"} href={"/home"}><b>Home</b></a>
                </li>
                <li className={"footer-container__menu-item"}>
                    <a className={"footer-container__link"} href={"/characters"}><b>Characters</b></a>
                </li>
                <li className={"footer-container__menu-item"}>
                    <a className={"footer-container__link"} href={"/merch"}><b>Merch</b></a>
                </li>
            </ul>
            <div className={"footer-container__copyright"}>
                <span><b>Copyright&copy; Luis Barceló 2024</b></span>
            </div>
        </div>
    );
}

export default Footer;