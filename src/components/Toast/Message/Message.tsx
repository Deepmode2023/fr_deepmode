import { IToastMessage } from "@/interfaces/components/toast";
import { FC, useEffect, memo } from "react";
import styles from "./Message.module.scss";
import {
  HEIGHT_TOAST,
  ICONS,
  COLORS_CONDITION,
  WIDTH_TOAST,
  calculate_postition_top,
} from "../constants";
import { CloseSvg } from "@/assets/icons";
import { motion, usePresence } from "framer-motion";

interface PropsMessageType extends IToastMessage {
  positionItem: number;
  onClose: (message: IToastMessage) => void;
}

const Message: FC<PropsMessageType> = ({
  positionItem,
  condition,
  message,
  time,
  onClose,
}) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent && safeToRemove) safeToRemove();
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      animate={{
        translateY: [-300, 0],
        opacity: [0.5, 1],
      }}
      exit={{
        opacity: [1, 0.5],
        top: -200,
      }}
      className={styles.container}
      transition={{
        duration: 0.5,
      }}
      style={{
        top: calculate_postition_top(positionItem),
        width: WIDTH_TOAST,
        height: HEIGHT_TOAST,
      }}
    >
      <div className={styles.icons}>
        {ICONS(condition).icon}
        <span
          className={styles.border}
          style={{ backgroundColor: COLORS_CONDITION(condition).color }}
        />
      </div>
      <div className={styles.title}>{ICONS(condition).title}</div>
      <div className={styles.message}>{message}</div>
      <div
        className={styles.close}
        onClick={() => onClose({ message, condition, time })}
      >
        <CloseSvg width={13} height={13} fill="#5b6366" />
      </div>
      <div
        className={styles.progressBar}
        style={{ backgroundColor: COLORS_CONDITION(condition).light }}
      >
        <motion.div
          animate={{
            width: [0, WIDTH_TOAST],
          }}
          transition={{
            duration: time / 1000,
          }}
          className={styles.progressLine}
          style={{
            backgroundColor: COLORS_CONDITION(condition).color,
          }}
        />
      </div>
    </motion.div>
  );
};

export default memo(Message);
