/** Check if x is instanceof SetConstructor */
export default function isSet(x: unknown): x is Set<unknown> {
    return x instanceof Set;
}
