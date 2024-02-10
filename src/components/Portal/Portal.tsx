"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ClientPortalInterface = {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector: string;
};

const ClientPortal = ({ children, selector, show }: ClientPortalInterface) => {
  const reference = document.getElementById(selector);
  if (!show) return null;

  return reference ? createPortal(children, reference) : null;
};

export default ClientPortal;
