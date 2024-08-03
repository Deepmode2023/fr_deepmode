import { ISVGIconProps } from "@/interfaces/assets";

export type ImageContent = {
  title: string;
  description: string;
  url: string;
};

export interface IRoute {
  name: string;
  path: string;
  Icon: (props: ISVGIconProps) => JSX.Element;
  title: string;
  active: boolean;
  protected: boolean;
}

export interface IRouteChild extends Omit<IRoute, "Icon"> {
  path: string;
}

export interface IRouteWithChildRouteInterface extends IRoute {
  childRoute: Array<IRouteChild>;
}
