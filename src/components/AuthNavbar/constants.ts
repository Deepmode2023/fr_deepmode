import React from "react";
import { IAuthSubLinkProperty } from "@/interfaces/components/navbar/authnavbar";
import { SettingsSvg, AccountSvg } from "@/assets/icons";

export const AuthSubLinkProperty: Array<IAuthSubLinkProperty> = [
  {
    header: "Account",
    keyName: "account",
    iconHeader: AccountSvg,
  },
  {
    header: "Settings",
    keyName: "settings",
    iconHeader: SettingsSvg,
  },
];
