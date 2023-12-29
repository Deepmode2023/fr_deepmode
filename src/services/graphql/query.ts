import { gql } from "@apollo/client";

export const getWords = gql`
  query GetWords(
    $limmit: Int
    $pagination: Int
    $skip: Int
    $slug: String
    $name: String
  ) {
    GetWords(
      commonParams: { limmit: $limmit, pagination: $pagination, skip: $skip }
      slug: $slug
      name: $name
    ) {
      __typename
      ... on ReturnedWordsType {
        limmit
        pagination
        skip
        data {
          name
        }
      }
      ... on BasicExeptionsSchema {
        details
      }
    }
  }
`;
