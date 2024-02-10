export const SIZED_LAYOUT = {
  MAIN: { gap: 4 },
  NAVBAR: { minWidth: 100, maxWidth: 300 },
  AUTH_NAVBAR: { height: 100 },
};

export const LAYOUT_GRID = {
  DESC: {
    main: `grid-cols-[auto_1fr_auto_100px] grid-rows-[${
      SIZED_LAYOUT.AUTH_NAVBAR.height / 2
    }px_${
      SIZED_LAYOUT.AUTH_NAVBAR.height / 2
    }px_minmax(100px,300px)_auto] box-border gap-1`,
    // NAVBAR
    navbar: `col-start-1 col-end-1 row-start-1 row-end-5 min-w-[${SIZED_LAYOUT.NAVBAR.minWidth}px] 
                max-w-[${SIZED_LAYOUT.NAVBAR.maxWidth}px] relative box-border`,
    // AUTH NAVBAR
    authNavbar:
      "col-start-3 col-end-5  row-start-1 row-end-3 sticky top-0 z-50 relative box-border",
    // CONTENT
    content:
      "col-start-2 col-end-5 row-start-3 row-end-5 z-0 box-border relative",
    // NAVBAR TOOLTIP
    navbarTooltip:
      "col-start-2 col-end-5 row-start-3 row-end-4 z-60 box-border sticky top-0",
  },
};
