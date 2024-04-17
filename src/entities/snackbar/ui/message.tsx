import { IToastMessage } from "../model/model";
import { ICONS } from "../config/constant";

export const Message = (message: IToastMessage) => {
  const variant = ICONS(message.condition);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-black">{variant.title}</div>
      <div>{message.message}</div>
    </div>
  );
};
