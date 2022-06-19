const size = {
  xs: '480px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
};

const device = {
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  md: `max-width: ${size.md}`,
  lg: `max-width: ${size.lg}`,
  xl: `min-width: ${size.lg}`,
};

export const breakpoint = { size, device };
