import type { FalsyType } from './types';

/** Check if x is any non-falsy value */
export default function isTruthy<T>(
    x: T | FalsyType
): x is Exclude<typeof x, FalsyType> {
    return !!x;
}
