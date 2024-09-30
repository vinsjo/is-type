/** Check if x is instanceof MapConstructor */
export default function isMap(x: unknown): x is Map<unknown, unknown> {
    return x instanceof Map;
}
