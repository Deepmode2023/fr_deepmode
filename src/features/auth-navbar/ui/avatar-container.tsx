"use client";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useState } from "react";
import { Avatar } from "@/entities/auth-navbar";
import CloseIcon from "@mui/icons-material/Close";

/*
 <Tooltip title="Open settings">
   <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
     <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
   </IconButton>
 </Tooltip>;
*/

export const AvatarContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <SpeedDial
      ariaLabel="SpeedDial tooltip example"
      icon={<Avatar />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="down"
    >
      {["some", "zome"].map((key) => (
        <SpeedDialAction
          key={key}
          icon={<CloseIcon />}
          onClick={handleClose}
          FabProps={{ variant: "circular", color: "error" }}
        />
      ))}
    </SpeedDial>
  );
};
