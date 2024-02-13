import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/queries.jsx";

function getCharacters(page) {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: page }
    })

    return { loading, error, characters: data ? data.characters : []}
}

export const CharactersService = {
    getCharacters
}
