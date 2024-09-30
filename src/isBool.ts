/** Check if typeof x is 'boolean' */
export default function isBool(x: unknown): x is boolean {
    return typeof x === 'boolean';
}
