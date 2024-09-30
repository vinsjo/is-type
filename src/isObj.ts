import { AnyObjectType } from './types';

/** Check if typeof x is 'object', x is not null and x is instanceof Object */
export default function isObj(x: unknown): x is AnyObjectType {
    return x != null && typeof x === 'object' && x instanceof Object;
}
