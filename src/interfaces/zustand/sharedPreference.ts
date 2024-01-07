import {
  IChangeSharedPreferenceParams,
  ThemeColor,
} from "../services/sharedPreference";

export interface ISharedPreferenceStore {
  theme: ThemeColor | null;
  shared_mode: boolean;
  addSharedPreference: (sharedParams: IChangeSharedPreferenceParams) => void;
}
