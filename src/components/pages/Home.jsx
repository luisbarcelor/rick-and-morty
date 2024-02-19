import {Link} from "react-router-dom";
import "../../styles/pages/Home.css";
import morty from "../../assets/morty.svg";
import beth from "../../assets/beth.svg";
import rick_meh from "../../assets/rick-meh.svg";

function Home() {

    return (
        <div className={"home-container"}>
            <section className={"home-header"}>
                <div className={"home-header__text"}>
                    <h1 className={"home-header__title"}>Welcome to the <span className={"home-container__highlight"}>Quantum Rick</span> Fan Page!</h1>
                    <p className={"home-header__subtitle"}>
                        Dive into the bizarre universe of Rick and Morty, where every
                        adventure is a mix of humor, science fiction,
                        and existential dread.
                    </p>
                    <div className={"home-header__btn-holder"}>
                        <Link className={"home-header__btn btn"} to={"/characters"}>
                            View Characters
                        </Link>
                    </div>
                </div>
                <div className={"accordion-image"}>
                    <div className={"accordion-image__image-container"}>
                    <div className={"accordion-image__back-card"}></div>
                        <div className={"accordion-image__image-holder"}>
                            <img className={"accordion-image__image"} src={beth} alt={"Beth is Missing"}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home-section"}>
                <div className={"accordion-image accordion-image--left"}>
                    <div className={"accordion-image__image-container"}>
                        <div className={"accordion-image__back-card accordion-image__back-card--left"}></div>
                        <div className={"accordion-image__image-holder accordion-image__image-holder--left"}>
                            <img className={"accordion-image__image"} src={morty} alt={"Morty is Missing"}/>
                        </div>
                    </div>
                </div>
                <div className={"home-card"}>
                    <h2 className={"home-card__title"}>Why our page <span className={"home-container__highlight"}>exists</span>?</h2>
                    <p className={"home-card__text"}>
                        This fan page dedicated to the amazing characters from the hit animated TV
                        show <em>Rick and Morty!</em> Explore our collection of character profiles, episode
                        summaries, and more.
                    </p>
                    <p className={"home-card__text"}>
                        Our mission is to provide fans with a comprehensive and engaging experience, celebrating the
                        humor, wit, and creativity of <em>Rick and Morty</em>. Join us as we dive into the
                        multiverse!
                    </p>
                </div>
            </section>

            <section className={"home-section home-section--primary-color"}>
                <div className={"home-card home-card--tertiary-color"}>
                    <h2 className={"home-card__title"}>Key Features</h2>
                    <ul className={"home-card__list"}>
                        <li className={"home-card__list-item"}>
                            Episode Guide: A comprehensive guide to all episodes, including summaries, air dates,
                            and notable moments.
                        </li>
                        <li className={"home-card__list-item"}>
                            Character Database: Detailed profiles for each main and recurring character, including
                            their backstory, personality traits, and notable quotes.
                        </li>
                        <li className={"home-card__list-item"}>
                            Search Functionality: A search bar that allows users to quickly find specific episodes,
                            characters, or topics of interest on the fan page.
                        </li>
                        <li className={"home-card__list-item"}>
                            Merchandise Showcase: A gallery showcasing official Rick and Morty merchandise,
                            with links to purchase items.
                        </li>
                    </ul>
                </div>
                <div className={"accordion-image"}>
                    <div className={"accordion-image__image-container"}>
                        <div className={"accordion-image__back-card"}></div>
                        <div className={"accordion-image__image-holder"}>
                            <img className={"accordion-image__image"} src={rick_meh} alt={"Rick is Missing"}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"home-section"}>
                <div className={"home-card"}>
                    <h2 className={"home-card__title"}>Get Involved</h2>
                    <p className={"home-card__text"}>
                        Are you a fellow fan of <em>Rick and Morty</em>? Join our community to discuss your favorite
                        characters, episodes, and theories. Connect with like-minded fans and share your passion!
                    </p>
                    <div className={"home-card__actions"}>
                        <Link className={"home-card__btn"} to={"/sign"}>Sign up</Link>
                        <p className={"home-card__text"}>or</p>
                        <Link className={"home-card__btn"} to={"/characters"}>Go to characters</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home