/** Check if x is instanceof Date and contains a valid date */
export default function isValidDate(x: Date): boolean;
export default function isValidDate(x: unknown): x is Date;
export default function isValidDate(x: unknown) {
    return x instanceof Date && !Number.isNaN(x.getTime());
}
