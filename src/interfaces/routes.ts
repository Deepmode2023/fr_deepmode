import { ISVGIconProps } from "@/interfaces/assets";

export type ImageContent = {
  title: string;
  description: string;
  url: string;
};

export interface IRouteInterface {
  name: string;
  path: string;
  Icon: (props: ISVGIconProps) => JSX.Element;
  title: string;
  active: boolean;
}

export interface IRouteWithChildRouteInterface extends IRouteInterface {
  childRoute: Array<Omit<IRouteInterface, "Icon">>;
}
