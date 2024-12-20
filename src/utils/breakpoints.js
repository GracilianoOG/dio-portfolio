const size = {
  md: "48rem",
  lg: "64rem",
  mobileOnly: "63.988rem",
};

export const devices = {
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,
};
