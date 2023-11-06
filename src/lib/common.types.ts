export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Keys<T> = {
  [K in keyof T]: K;
}[keyof T][];
export type Key<T> = {
  [K in keyof Required<T>]: K;
}[keyof Required<T>];
