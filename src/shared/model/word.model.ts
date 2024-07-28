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
  partOfSpeach: keyof typeof PartOfSpeachEnum;
  translate: String;
  slug: keyof typeof SlugEnum;
  synonym: String[];
  example?: string;
  slang?: keyof typeof SlangEnum;
  imageUrl?: String;
};
