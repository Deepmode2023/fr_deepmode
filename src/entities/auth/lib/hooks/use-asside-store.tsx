import { AuthNavbarDrawerStore } from "../../model/asside-store";
import { createSelectorHooks } from "auto-zustand-selectors-hook";

export const authNavbarDrawerStore = createSelectorHooks(AuthNavbarDrawerStore);

export const useAssideStore = () => {
  const content = authNavbarDrawerStore.useContent();
  const header = authNavbarDrawerStore.useHeader();
  const open = authNavbarDrawerStore.useOpen();
  const changeAssideDialog = authNavbarDrawerStore.useChangeAsideCondition();

  return { content, header, open, changeAssideDialog };
};
