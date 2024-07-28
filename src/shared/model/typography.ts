import { SxProps } from "@mui/material";

export interface ITotalTypography {
  fontSize?: number;
  text: string;
  sx?: Omit<SxProps, "textTransform">;
  textTransform?: "capitalize" | "uppercase" | "lowercase";
}
