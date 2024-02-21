import {useQuery} from "@apollo/client";
import {SEARCH_CHARACTERS} from "../../utils/GaphqlQueries.jsx";
import Card from "../views/Card.jsx";

function SearchCards({ searchTerm }) {
    const { loading, error, data } = useQuery(SEARCH_CHARACTERS, {
        variables: { searchTerm: searchTerm }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {data.characters.results.map((item) => (
                <Card character={item} key={item.id}></Card>
            ))}
        </>
    );
}

export default SearchCards;