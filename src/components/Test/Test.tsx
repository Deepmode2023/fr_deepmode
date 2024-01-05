"use client";
import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { getRefreshToken } from "@/services/api.auth";
import ClientPortal from "@/components/Portal/Portal";
import { DangerSvg } from "@/assets/icons/DangerSvg";
import { useRefreshToken } from "@/hooks/useRefreshToken";

export const Test = () => {
  const [portal, setPortal] = useState(false);
  return <div>TEST COMPONENTS</div>;
};
