import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ID_TESTING } from "../../constants";

type IPlaceholderProps = {
  color: string;
  placeholder?: string;
  message: string;
  validateMessage: boolean;
};

const variant = {
  initial: {
    height: "0px",
  },
  animate: {
    height: "auto",
    transition: {
      delay: 0.3,
    },
  },
  exit: {
    height: 0,
  },
};

export const Placeholder: FC<IPlaceholderProps> = ({
  color,
  placeholder,
  validateMessage,
  message,
}) => {
  const content =
    validateMessage && message?.length > 0 ? message : placeholder;

  return (
    <div style={{ color }} className="text-xs select-none overflow-hidden">
      <AnimatePresence mode="wait">
        {placeholder && (
          <motion.div
            key="placeholder"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variant}
            transition={{ duration: 0.3 }}
            data-testid={ID_TESTING.placeholder}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
