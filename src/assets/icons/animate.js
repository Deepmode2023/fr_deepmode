export const animateProps = ({ duration = 0.4, isAnimate = true }) =>
  isAnimate
    ? {
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      }
    : {};
