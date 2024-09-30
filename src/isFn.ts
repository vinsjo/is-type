/** Check if typeof x is 'function' or x is instanceof Function */
export default function isFn(x: unknown): x is (...args: unknown[]) => unknown {
    return typeof x === 'function' || x instanceof Function;
}
