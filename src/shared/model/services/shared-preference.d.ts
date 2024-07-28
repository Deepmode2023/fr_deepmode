export declare enum ThemeColor {
  WHITE_THEME = "WHITE_THEME",
  DARK_THEME = "DARK_THEME",
}

export interface ISharedPreferenceResponse {
  theme: ThemeColor;
  shared_mode: boolean;
}

export interface IChangeSharedPreferenceParams {
  theme?: ThemeColor;
  shared_mode?: boolean;
}
