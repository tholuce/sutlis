

export type Partial<T> = T extends Function
  ? T
  : T extends object
  ? T
  : { [C in keyof T]: Partial<T[C]> };
