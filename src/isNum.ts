/**
 * Check if typeof x is 'number' and x is not NaN
 */
export default function isNum(x: unknown): x is number {
    return typeof x === 'number' && !Number.isNaN(x);
}
