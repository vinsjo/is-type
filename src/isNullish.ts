/** Check if x is undefined or null */
export default function isNullish(x: unknown): x is undefined | null {
    return x == null;
}
