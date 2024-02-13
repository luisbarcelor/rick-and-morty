import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className={"home"}>
                <h1>Welcome to the Rick and Morty Fan Page!</h1>

                <section className={"intro"}>
                    <div className={"intro-card"}>
                        <h2>About Us</h2>
                        <p>This fan page dedicated to the amazing characters from the hit animated TV
                            show <em>Rick and Morty</em>! Explore our collection of character profiles, episode summaries, and
                            more.</p>
                    </div>

                    <div className="intro-card">
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide fans with a comprehensive and engaging experience, celebrating the
                            humor, wit, and creativity of <em>Rick and Morty</em>. Join us as we dive into the
                            multiverse!</p>
                    </div>
                </section>

                <section className="key-features">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                </section>

                <section className={"call-to-action"}>
                    <h2>Get Involved</h2>
                    <p>Are you a fellow fan of <em>Rick and Morty</em>? Join our community to discuss your favorite
                        characters, episodes, and theories. Connect with like-minded fans and share your passion!</p>
                    <div>
                        <Link to={"/sign"}>Sign up</Link>
                        <p>or</p>
                        <Link to={"/characters"}>Go to characters</Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home