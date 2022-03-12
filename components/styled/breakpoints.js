const size = {
  xs: '321px',
  sm: '768px',
  lg: '1200px',
};
const device = {
  xs: `max-width: ${size.xs}`,
  sm: `max-width: ${size.sm}`,
  lg: `max-width: ${size.lg}`,
};
export const breakpoint = { size, device };
