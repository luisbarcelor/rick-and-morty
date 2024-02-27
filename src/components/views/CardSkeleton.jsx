import placeholder from "../../assets/placeholder.jpeg";
import "../../styles/views/CardSkeleton.css";

function CardSkeleton() {
    return (
        <div className={"card-skeleton"}>
            <img className={"card-skeleton__image"} src={placeholder} alt={"Missing character"}/>
            <div className={"card-skeleton__text"}>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--xl"}></div>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--l"}></div>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--m"}></div>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--s"}></div>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--xs"}></div>
            </div>
            <div className={"card-skeleton__btn-holder"}>
                <div className={"card-skeleton__placeholder card-skeleton__placeholder--btn"}></div>
            </div>
        </div>
    );
}

export default CardSkeleton;