export interface INavbarProps {}

export interface INavbarContextProps {
  current: string | null;
  setCurrent: (current: string) => void;
}
