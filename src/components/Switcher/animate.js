const rightSwitcher = (width) => ({
  hidden: {
    opacity: 0,
    transform: `translateX(${width}px)`,
    transition: { delay: 0.17 },
  },
  show: {
    opacity: 1,
    right: 0,
    transition: { delay: 0.28 },
  },
});

const leftSwitcher = (width) => ({
  hidden: {
    opacity: 0,
    transform: `translateX(-${width}px)`,

    transition: { delay: 0.18 },
  },
  show: {
    opacity: 1,
    left: 0,
    transition: { delay: 0.3 },
  },
});

const variants = (width) => ({
  switchLeft: {
    width: [width / 2, width / 2 + 30, width / 2],
    transform: `translateX(0px)`,
    transition: {
      duration: 0.5,
    },
  },
  switchRight: {
    width: [width / 2, width / 2 + 20, width / 2],
    transform: `translateX(${width / 2 - 13}px)`,
    transition: {
      duration: 0.5,
    },
  },
});

export { variants, rightSwitcher, leftSwitcher };
