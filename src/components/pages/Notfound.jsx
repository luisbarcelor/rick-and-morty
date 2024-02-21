import "../../styles/pages/NotFound.css"

function Notfound() {
    return (
        <div className="nf-container">
            <div className={"nf-container__banner"}>
                <div className="nf-container__space">
                    <div className="nf-container__wrapper">
                        <span className={"nf-container__nums"}>44</span>
                        <p className={"nf-container__text"}>Uh-oh! Looks like you&apos;ve stumbled into a dimension
                            where this page doesn&apos;t exist.<br/>Better grab your portal gun and try another dimension!
                        </p>
                        <div className={"nf-container__btn-wrapper"}>
                            <a className={"nf-container__btn btn"} href={"/home"}>Back to home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notfound