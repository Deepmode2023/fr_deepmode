import { ReactNode, createContext, useState } from "react";
import {
  AccordionIsActiveType,
  AccordionChildActiveContextType,
} from "@/interfaces/context/accordionContext";

export const AccordionIsActiveContext = createContext<AccordionIsActiveType>({
  isActive: false,
  setIsActive: () => {
    throw new Error("setIsActive doesnt implement!");
  },
});

export const AccordionChildActiveContext =
  createContext<AccordionChildActiveContextType>({
    childActive: null,
    setChildActive: (childActive) => console.log(childActive),
  });

export const AccordionProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [childActive, setChildActive] = useState<string | null>(null);

  return (
    <AccordionIsActiveContext.Provider value={{ isActive, setIsActive }}>
      <AccordionChildActiveContext.Provider
        value={{ childActive, setChildActive }}
      >
        {children}
      </AccordionChildActiveContext.Provider>
    </AccordionIsActiveContext.Provider>
  );
};
