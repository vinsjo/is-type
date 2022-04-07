import { createTypeChecker } from "./typeChecker";
/** Check if value(s) are of type 'number' and not NaN */
export const isNum: (...values: any[]) => boolean;
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
export const isInt: (...values: any[]) => boolean;
/** Check if value(s) are of type 'number', not NaN and float value(s) */
export const isFloat: (...values: any[]) => boolean;
/** Check if value(s) are of type 'string' */
export const isStr: (...values: any[]) => boolean;
/** Check if value(s) are of type 'boolean' */
export const isBool: (...values: any[]) => boolean;
/** Check if value(s) are of type 'object' and instance(s) of Object constructor */
export const isObj: (...values: any[]) => boolean;
/** Check if value(s) are array(s), (uses Array.isArray) */
export const isArr: (...values: any[]) => boolean;
/** Check if value(s) are of type 'function' */
export const isFn: (...values: any[]) => boolean;
/** Check if value(s) are equal to null */
export const isNull: (...values: any[]) => boolean;
/** Check if value(s) are undefined */
export const isUndef: (...values: any[]) => boolean;
export { createTypeChecker };
