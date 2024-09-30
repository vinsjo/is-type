/** Check if x is undefined */
export default function isUndef(x: unknown): x is undefined {
    return x === undefined;
}
