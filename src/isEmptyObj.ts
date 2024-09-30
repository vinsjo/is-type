import { AnyEmptyObjectType } from './types';

/** Check if x is object and if x has no enumerable properties */
export default function isEmptyObj(x: unknown[]): x is never[];
export default function isEmptyObj(x: unknown): x is AnyEmptyObjectType;
export default function isEmptyObj(x: unknown): boolean {
    if (!x || typeof x !== 'object') return false;
    for (const _ in x) return false;
    return true;
}
