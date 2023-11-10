import { Dispatch, SetStateAction } from 'react';

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Keys<T> = {
  [K in keyof T]: K;
}[keyof T][];
export type Keyx<T> = {
  [K in keyof Required<T>]: K;
}[keyof Required<T>];

type NonNullableArrayItem<T extends any[]> = T extends (infer U)[]
  ? NonNullable<U>
  : never;

export type GraphQLNestedProperty<T, K extends keyof T> = NonNullable<
  T[K]
> extends (infer U)[]
  ? NonNullableArrayItem<U[]>
  : never;

export type SetState<T> = Dispatch<SetStateAction<T>>;
