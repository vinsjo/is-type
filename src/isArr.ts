/** Check if x is an array (uses Array.isArray) */
export default function isArr(x: unknown): x is unknown[] {
    return Array.isArray(x);
}
