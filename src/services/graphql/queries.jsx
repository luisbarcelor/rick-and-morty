import {gql} from "@apollo/client";
export const GET_CHARACTERS = gql`
    query Get_Character($page: Int!) {
      characters(page: $page) {
        info {
          next
        },
        results{
          id
          name
          status
          species
          type
          gender
        }
      }
    }
`;

