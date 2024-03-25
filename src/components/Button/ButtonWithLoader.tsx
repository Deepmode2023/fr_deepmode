import { IButtonWithLoader } from "@/interfaces/components/button";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "@/components";
import ButtonBasic from "./Button";
import { cls } from "@/shared";

const ButtonWithLoader = ({
  isLoading,
  disabled,
  children,
  className,
  colorLoader = "currentcolor",
  scaleLoader = 0.4,
  ...props
}: IButtonWithLoader) => (
  <ButtonBasic
    className={className}
    {...props}
    disabled={disabled ?? isLoading}
  >
    <div className="flex items-center justify-center truncate">
      <div
        className={cls(
          "uppercase truncate",
          Boolean(isLoading) && "border-r-2 pr-4 border-[currentcolor]"
        )}
      >
        {children}
      </div>
      <AnimatePresence mode="wait">
        {Boolean(isLoading) && (
          <motion.div
            className="flex items-center"
            initial={{ width: 0, height: 0, visibility: "visible" }}
            animate={{ width: "auto", height: "auto" }}
            exit={{ width: 0, height: 0, visibility: "hidden" }}
            transition={{ duration: 0.4 }}
          >
            <Loader scale={scaleLoader} color={colorLoader} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </ButtonBasic>
);

export default ButtonWithLoader;
