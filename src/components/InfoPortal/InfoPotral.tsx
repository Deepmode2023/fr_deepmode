import React from "react";

import { IInfoPortalProps } from "@/interfaces/components/infoportal";
import ClientPortal from "../Portal/Portal";
import { PORTAL_ID } from "@/global.constant";
import { motion } from "framer-motion";

export const InfoPortal: React.FC<IInfoPortalProps> = ({
  children,
  isActiveLayout,
}) => {
  return (
    <ClientPortal
      selector={PORTAL_ID.LAYOUT_PORTAL.INFO_CONTENT}
      show={isActiveLayout}
    >
      <div
        data-testid="info-portal-test-id"
        className="absolute top-0 bottom-0 right-0 left-0 z-50"
      >
        <div className="sticky top-[110px] h-[calc(100vh-110px)] flex items-center justify-center">
          <motion.div
            className="bg-red-300"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "300px", height: 20 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </ClientPortal>
  );
};
