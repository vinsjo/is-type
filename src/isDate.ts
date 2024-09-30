/** Check if x is instanceof DateConstructor */
export default function isDate(x: unknown): x is Date {
    return x instanceof Date;
}
