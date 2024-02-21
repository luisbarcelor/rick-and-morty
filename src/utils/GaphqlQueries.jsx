import {gql} from "@apollo/client";
export const GET_CHARACTERS = gql`
    query Get_Character($page: Int!) {
      characters(page: $page) {
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
    }
`;

export const SEARCH_CHARACTERS = gql`
    query Search_Character($searchTerm: String!) {
      characters(filter: {name: $searchTerm}) {
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
    }
`;

