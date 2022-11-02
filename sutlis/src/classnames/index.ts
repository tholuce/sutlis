
export const classnames = (...cls: any[]): string => {
  return cls.filter(Boolean).join(" ");
};