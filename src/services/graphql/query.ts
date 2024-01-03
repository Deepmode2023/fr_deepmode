import { gql, DocumentNode } from "@apollo/client";

export const getWords = (responseValue: DocumentNode) => gql`
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
    ) ${responseValue}
  }
`;

export const getSpacedRepetition = (responseValue: DocumentNode) => gql`
  query GetSpacedRepetition(
    $dateStart: DateTime!
    $dateEnd: DateTime!
    $title: String
    $slug: String
  ) {
    GetSpacedRepetition(
      dateStart: $dateStart
      dateEnd: $dateEnd
      title: $title
      slug: $slug
    ) ${responseValue}
  }
`;
