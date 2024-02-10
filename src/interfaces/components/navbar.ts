export interface INavbarProps {}

export interface INavbarContextProps {
  current: string | null;
  setCurrent: (current: string) => void;
}

export interface IAuthNavigationProps {}

export type IconSettingsType = {
  width: number;
  height: number;
};

export interface IAddWordButtonProps {
  iconSettings?: IconSettingsType;
}
