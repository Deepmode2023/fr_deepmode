export interface ISVGIconProps {
  fill?: string;
  strokeColor?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  isAnimate?: boolean;
}

export type PathItemType = {
  keyName: string;
};
export interface ISVGStackProps extends ISVGIconProps {
  pathItems: Array<PathItemType>;
  activeLink?: string | null;
  onChangeActiveLink?: (activeLink: string | null) => void;
}
