import "../../styles/pages/Home.css";
import morty from "../../assets/morty.svg";
import beth from "../../assets/beth.svg";
import rick_meh from "../../assets/rick-meh.svg";

function Home() {

    return (
        <div className={"home-container"}>
            <section className={"home-header"}>
                <div className={"home-header__text"}>
                    <h1 className={"home-header__title"}>Welcome to <span className={"home-container__highlight"}>The Quantum Rick</span> Fan Page!</h1>
                    <p className={"home-header__subtitle"}>
                        Dive into the bizarre universe of Rick and Morty, where every
                        adventure is a mix of humor, science fiction,
                        and existential dread.
                    </p>
                    <div className={"home-header__btn-holder"}>
                        <a className={"home-header__btn btn"} href={"/characters"}>
                            View Characters
                        </a>
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
                    <h2 className={"home-card__title"}>What&apos;s this <span className={"home-container__highlight"}>Website</span>?</h2>
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
                <div className={"home-card home-card--dotted"}>
                    <h2 className={"home-card__title home-card__title"}>Rick-tastic <span
                        className={"home-container__highlight"}>Features</span></h2>
                    <ul className={"home-card__list"}>
                    <li className={"home-card__list-item"}>
                            <b>Episode Guide:</b> A comprehensive guide to all episodes, including summaries, air dates,
                            and notable moments.
                        </li>
                        <li className={"home-card__list-item"}>
                            <b>Character Database:</b> Detailed profiles for each main and recurring character, including
                            their backstory, personality traits, and notable quotes.
                        </li>
                        <li className={"home-card__list-item"}>
                            <b>Search Functionality:</b> A search bar that allows users to quickly find specific episodes,
                            characters, or topics of interest on the fan page.
                        </li>
                        <li className={"home-card__list-item"}>
                            <b>Merchandise Showcase:</b> A gallery showcasing official Rick and Morty merchandise.
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
                <div className={"home-card home-card--bottom"}>
                    <h2 className={"home-card__title"}>Merch <span
                        className={"home-container__highlight"}>Madness</span>!</h2>
                    <p className={"home-card__text"}>
                        Gear Up for <em>Rick and Morty Merch Madness!</em> Dive into a
                        world of exclusive merchandise tailored just for you. From iconic characters to unforgettable
                        episodes, our collection has it all. Elevate your fandom with must-have apparel and collectibles
                        that scream &apos;Wubba Lubba Dub Dub!&apos; Explore the multiverse of <em>Rick and Morty</em> merch
                        now!
                    </p>
                    <div className={"home-card__actions"}>
                        <a className={"home-card__btn btn--secondary"} href={"/characters"}>View Characters</a>
                        <p className={"home-card__text"}>or</p>
                        <a className={"home-card__btn btn"} href={"/merch"}>View Merch</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home