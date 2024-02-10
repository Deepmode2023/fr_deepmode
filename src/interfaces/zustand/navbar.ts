export interface INavbarStore {
  activeItem: string | null;
  authActiveLink: string | null;

  changeActiveItem: (activeItem: string) => void;
  changeAuthActiveLink: (authActiveLink: string | null) => void;
}
