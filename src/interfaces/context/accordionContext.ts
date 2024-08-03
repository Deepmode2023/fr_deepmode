export type RegisterAccordionType = {
  isActive: boolean;
};

export type AccordionIsActiveType = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AccordionChildActiveContextType = {
  childActive: string | null;
  setChildActive: React.Dispatch<React.SetStateAction<string | null>>;
};

export type RegisterAccordionsContextType = {
  registerAccordion: Record<string, RegisterAccordionType> | {};
  setRegisterAccordion: React.Dispatch<
    React.SetStateAction<Record<string, RegisterAccordionType> | {}>
  >;
};
