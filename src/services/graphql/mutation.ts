import { DocumentNode, gql } from "@apollo/client";

export const createWord = (responseValue: DocumentNode) => gql`
  mutation CreateWord(
    $name: String!
    $slug: String!
    $part_of_speach: PartOfSpeach!
    $translate: String!
    $example: String
    $slang: SlangEnum
    $synonym: [String!]
    $image_url: String
  ) {
    CreateWord(
      slug: $slug
      name: $name
      partOfSpeach: $part_of_speach
      translate: $translate
      example: $example
      slang: $slang
      synonym: $synonym
      imageUrl: $image_url
    ) ${responseValue}
  }
`;

export const updateWord = (responseValue: DocumentNode) => gql`
  mutation UpdateWord($id:Int!, $slang: SlangEnum, $name: String, $example: String, $translate: String, $slug:String, $synonym: [String!], $imageUrl:String) {
    UpdateWord(
      id: $id,
      name: $name,
      slug: $slug,
      example: $example,
      imageUrl: $imageUrl,
      slang: $slang,
      translate: $translate,
      synonym: $synonym,
    ) ${responseValue}
  }
`;

export const deleteWord = (responseValue: DocumentNode) => gql`
  mutation DeleteWord($id: Int!) {
    DeleteWord(id: $id) ${responseValue}
  }
`;

export const createRepetition = (responseValue: DocumentNode) => gql`
  mutation CreateRepetition(
    $description: String!
    $slug: SlugEnum!
    $title: String!
    $conditionRepetition: Boolean!
  ) {
    CreateRepetition(
      description: $description
      slug: $slug
      title: $title
      conditionRepetition: $conditionRepetition
    ) ${responseValue}
  }
`;

export const deleteRepetition = (responseValue: DocumentNode) => gql`
  mutation DeleteRepetition($id: Int!) {
    DeleteRepetition(id: $id) ${responseValue}
  }
`;
