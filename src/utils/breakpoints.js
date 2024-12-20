const size = {
  md: "48rem",
  lg: "64rem",
};

export const devices = {
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  mobileOnly: `(max-width: ${size.lg})`,
};
