/** Check if x is null */
export default function isNull(x: unknown): x is null {
    return x === null;
}
