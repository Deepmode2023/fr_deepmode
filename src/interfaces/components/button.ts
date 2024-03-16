import { ComponentPropsWithoutRef, ReactNode } from "react";

interface IButtonBasicProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode | null;
}

interface IButtonWithLoader extends IButtonBasicProps {
  isLoading: boolean;
  scaleLoader?: number;
  colorLoader?: string;
}

export type { IButtonBasicProps, IButtonWithLoader };
