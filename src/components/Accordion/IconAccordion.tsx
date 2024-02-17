import { DownArrowSvg, UpArrowSvg } from "@/assets/icons/navigate";

type IconAccordionPropsType = {
  childItems: Array<any>;
  active: boolean;
};

export const IconAccordion = ({
  childItems,
  active,
}: IconAccordionPropsType) => {
  if (childItems.length < 1) return null;

  return !active ? (
    <DownArrowSvg strokeColor="stroke-slate-600" />
  ) : (
    <UpArrowSvg strokeColor="stroke-slate-600" />
  );
};
