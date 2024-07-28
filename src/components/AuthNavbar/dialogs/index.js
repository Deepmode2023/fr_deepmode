import { AccountDialog } from "./Account";
import { Settings } from "./Settings";
import { AddWord } from "./AddWord/AddWord";

export const dialogs = (dialogName, props = {}) => {
  switch (dialogName.toUpperCase()) {
    case "ACCOUNT":
      return {
        assideHeader: (
          <div className="dark:text-dark-color3 text-light-color1 uppercase flex items-center text-[23px]">
            account
          </div>
        ),
        assideContent: <AccountDialog {...props} />,
      };

    case "SETTINGS":
      return {
        assideHeader: (
          <div className="dark:text-dark-color3 text-light-color1 uppercase flex items-center text-[23px]">
            settings
          </div>
        ),
        assideContent: <Settings {...props} />,
      };

    case "ADDWORD":
      return {
        assideHeader: (
          <div className="dark:text-dark-color3 text-light-color1 uppercase flex items-center text-[23px]">
            create word form
          </div>
        ),
        assideContent: <AddWord {...props} />,
      };

    default:
      return { assideContent: null, assideHeader: null };
  }
};
