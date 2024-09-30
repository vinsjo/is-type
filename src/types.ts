export type FalsyType = null | undefined | false | 0 | '';
export type AnyObjectType = { [K: PropertyKey]: unknown };
export type AnyEmptyObjectType = { [K: PropertyKey]: never };
