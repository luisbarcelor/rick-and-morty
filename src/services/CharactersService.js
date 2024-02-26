import queries from './queries/GaphqlQueries.js'

const API_URL = 'https://rickandmortyapi.com/graphql';

async function getCharacters(page) {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json;charset=UTF-8"},
        body: JSON.stringify({ query: queries.getCharacters(page) })
    })
}

async function searchCharacters(searchTerm) {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {"Content-Type": "application/json;charset=UTF-8"},
        body: JSON.stringify({ query: queries.searchCharacters(searchTerm) })
    })
}

export default {
    getCharacters,
    searchCharacters
}