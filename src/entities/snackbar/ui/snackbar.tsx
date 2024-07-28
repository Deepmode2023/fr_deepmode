"use client";
import React, { ForwardedRef, forwardRef } from "react";
import { CustomContentProps } from "notistack";
import { COLORS_CONDITION, WIDTH_TOAST } from "../config/constant";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { TIME_DISPLAY_TOAST } from "@/shared";
import { useSnackbar } from "notistack";

export const Snackbar = forwardRef(
  (props: CustomContentProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { closeSnackbar } = useSnackbar();
    const { iconVariant, variant, hideIconVariant, autoHideDuration, id } =
      props;
    const colorPalette = COLORS_CONDITION(variant);

    return (
      <section
        style={{ ...props.style, color: colorPalette.color }}
        ref={ref}
        className={styles.snackbarContainer}
      >
        <div
          className={styles.icon}
          style={{ borderColor: colorPalette.color }}
        >
          {!hideIconVariant && iconVariant[variant]}
        </div>
        <div className={styles.messageContainer}>{props.message}</div>
        <div className={styles.closeBtn} onClick={() => closeSnackbar(id)}>
          <CloseIcon fontSize="small" />
        </div>
        <div
          className={styles.progressBar}
          style={{ backgroundColor: COLORS_CONDITION(variant).light }}
        >
          <motion.div
            className={styles.progressLine}
            animate={{
              width: [0, WIDTH_TOAST],
            }}
            transition={{
              duration: autoHideDuration
                ? autoHideDuration / 1000
                : TIME_DISPLAY_TOAST / 1000,
            }}
            style={{
              backgroundColor: COLORS_CONDITION(variant).color,
            }}
          />
        </div>
      </section>
    );
  }
);
