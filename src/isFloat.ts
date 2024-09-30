/**
 * Check if typeof x is 'number', x is not
 * NaN and x is a float value
 */
export default function isFloat(x: number): boolean;
export default function isFloat(x: unknown): x is number;
export default function isFloat(x: unknown) {
    if (typeof x !== 'number') return false;
    const r = x % 1;
    return !Number.isNaN(r) && r !== 0;
}
