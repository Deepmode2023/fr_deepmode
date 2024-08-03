export interface INavbarStore {
  activeItem: string | null;
  authActiveLink: string | "main";

  changeActiveItem: (activeItem: string) => void;
  changeAuthActiveLink: (authActiveLink: string | "main") => void;
}
