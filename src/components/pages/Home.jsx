import {Link} from "react-router-dom";
import "../../styles/pages/Home.css"

function Home() {
    return (
        <div className={"container"}>
                <section className={"header"}>
                    <h1 className={"header__title"}>Welcome to the Rick and Morty Fan Page!</h1>
                </section>

                <section className={"home-section"}>
                    <div className={"home-card"}>
                        <h2 className={"home-card__title"}>About Us</h2>
                        <p className={"home-card__text"}>
                            This fan page dedicated to the amazing characters from the hit animated TV
                            show <em>Rick and Morty</em>! Explore our collection of character profiles, episode
                            summaries, and more.
                        </p>
                    </div>

                    <div className={"home-card"}>
                        <h2 className={"home-card__title"}>Our Mission</h2>
                        <p className={"home-card__text"}>
                            Our mission is to provide fans with a comprehensive and engaging experience, celebrating the
                            humor, wit, and creativity of <em>Rick and Morty</em>. Join us as we dive into the
                            multiverse!
                        </p>
                    </div>
                </section>

                <section className={"home-section"}>
                    <div className={"home-card"}>
                        <h2 className={"home-card__title"}>Key Features</h2>
                        <ul className={"home-card__list"}>
                            <li className={"home-card__item"}>Feature 1</li>
                            <li className={"home-card__item"}>Feature 2</li>
                            <li className={"home-card__item"}>Feature 3</li>
                            <li className={"home-card__item"}>Feature 4</li>
                        </ul>
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