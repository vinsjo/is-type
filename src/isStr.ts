/** Check if typeof x is 'string' */
export default function isStr(x: unknown): x is string {
    return typeof x === 'string';
}
