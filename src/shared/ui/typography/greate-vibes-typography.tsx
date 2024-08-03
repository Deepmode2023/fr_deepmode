import { Typography } from "@mui/material";
import { ITotalTypography } from "../../model/typography";
import { Great_Vibes } from "next/font/google";

const GreateVibesScipt = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

interface IGrateVibesTypographyProps extends ITotalTypography {}

export const GrateVibesTypography = ({
  text,
  sx,
  textTransform = "capitalize",
}: IGrateVibesTypographyProps) => {
  return (
    <Typography
      className={textTransform}
      sx={{ ...GreateVibesScipt.style, ...sx }}
    >
      {text}
    </Typography>
  );
};
