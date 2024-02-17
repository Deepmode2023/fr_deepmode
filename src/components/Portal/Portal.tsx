"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type ClientPortalInterface = {
  children: React.ReactNode;
  show: boolean;
  onClose?: () => void;
  selector: string;
};

const ClientPortal = ({ children, selector, show }: ClientPortalInterface) => {
  const [blocked, setBlocked] = useState(false);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  useLayoutEffect(() => {
    setBlocked(true);

    const timeoutId = setTimeout(() => {
      setBlocked(false);
    }, 1500);

    return function cleanup() {
      clearTimeout(timeoutId);
    };
  }, [show]);

  if (!show || !mount) return null;
  const reference = window.document.getElementById(selector);

  console.log(reference, show);

  return reference ? createPortal(children, reference) : null;
};

export default ClientPortal;
