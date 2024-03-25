export enum PartOfSpeachEnum {
  NOUN = "NOUN",
  PRONOUN = "PRONOUN",
  VERB = "VERB",
  ADJECTIVE = "ADJECTIVE",
  ADVERB = "ADVERB",
  PREPOSITION = "PREPOSITION",
  CONJUNCTION = "CONJUNCTION",
  INTERJECTION = "INTERJECTION",
}

export enum SlangEnum {
  ENG = "ENG",
  USA = "USA",
  PL = "PL",
}

export enum SlugEnum {
  WORD = "WORD",
  PDF = "PDF",
  SLANG = "THEME_WITH_SLANG",
}

export type WordType = {
  name: String;
  partOfSpeach: PartOfSpeachEnum;
  translate: String;
  slug: SlugEnum;
  synonym: String[];
  example?: string;
  slang?: SlangEnum;
  imageUrl?: String;
};
