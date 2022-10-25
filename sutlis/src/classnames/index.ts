export const classnames = (...cls: []): string => {
  return cls.filter(Boolean).join(" ");
};