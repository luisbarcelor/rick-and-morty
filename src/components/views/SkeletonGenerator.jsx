/* eslint-disable react/prop-types */
import CardSkeleton from "./CardSkeleton.jsx";

function SkeletonGenerator({ count }) {
    return (
        <>
            {Array(count).fill(null).map((_, index) => {
                return <CardSkeleton key={index}/>
            })}
        </>
    );
}

export default SkeletonGenerator;