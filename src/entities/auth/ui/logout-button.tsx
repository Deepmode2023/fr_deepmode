import Button from "@mui/material/Button";
import { sessionStorage } from "@/entities/storage";
import { Lagout } from "../lib/utils/logout";

export const LagoutButton = () => {
  const clickHandler = () => {
    try {
      const token = sessionStorage()?.getSession();

      if (token) Lagout(token);
    } catch (e) {}
  };
  return <Button onClick={clickHandler}>Lagout</Button>;
};
