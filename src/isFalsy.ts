import type { FalsyType } from './types';

/** Check if x is any falsy value ({@link FalsyType}) */
export default function isFalsy(x: unknown): x is FalsyType {
    return !x;
}
