import AvatarMUI from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import demo from "@/assets/demo.jpeg";

interface IAvatarWithTooltipProps {
  onClick?: () => void;
}

export const Avatar = ({ onClick }: IAvatarWithTooltipProps) => {
  return <AvatarMUI alt="Remy Sharp" src={demo.src} />;
};
