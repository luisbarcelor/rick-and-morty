const getCharacters = page => {
    return `{
        characters(page: ${page}) {
            results {
                id
                name
                status
                species
                type
                gender
                image
                location {
                    name
                }
                episode {
                    name
                }
            }
        }
    }`;
}

const searchCharacters = searchTerm => {
    return `{
        characters(filter: {name: "${searchTerm}"}) {
            results {
                id
                name
                status
                species
                type
                gender
                image
                location {
                    name
                }
                episode {
                    name
                }
            }
        }
    }`;
}

export default {
    getCharacters,
    searchCharacters
}
