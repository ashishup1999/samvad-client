export const getScreenSize = ({ width, height }) => {
  if (width > 915 || height > 915) {
    return { mobile: false, desktop: true };
  }
  return { mobile: true, desktop: false };
};
