/**
 * Check if typeof x is 'number', x is not
 * NaN and x is an integer
 */
export default function isInt(x: number): boolean;
export default function isInt(x: unknown): x is number;
export default function isInt(x: unknown) {
    return typeof x === 'number' && x % 1 === 0;
}
