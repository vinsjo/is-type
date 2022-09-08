export declare type ValidatorCallback = (x: any) => boolean;
export declare type Validator = (...args: any[]) => ReturnType<ValidatorCallback>;
/** Create typeChecker function */
export declare const createTypeChecker: (callback: ValidatorCallback) => Validator;
/** Check if value(s) are of type 'number' and not NaN */
export declare const isNum: Validator;
/** Check if value(s) are of type 'number',
 * smaller than Infinity, larger than -Infinity and not NaN
 */
export declare const isFinite: Validator;
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
export declare const isInt: Validator;
/** Check if value(s) are of type 'number', not NaN and float value(s) */
export declare const isFloat: Validator;
/** Check if value(s) are of type 'string' */
export declare const isStr: Validator;
/** Check if value(s) are of type 'boolean' */
export declare const isBool: Validator;
/** Check if value(s) are of type 'object' and instance(s) of Object export constructor */
export declare const isObj: Validator;
/** Check if value(s) are array(s), (uses Array.isArray) */
export declare const isArr: Validator;
/** Check if value(s) are of type 'function' */
export declare const isFn: Validator;
/** Check if value(s) are equal to null */
export declare const isNull: Validator;
/** Check if value(s) are undefined */
export declare const isUndef: Validator;
/** Check if value(s) are Date objects */
export declare const isDate: Validator;
/** Check if value(s) are valid Date objects */
export declare const isValidDate: Validator;
/** Check if value(s) are "truthy" */
export declare const isTruthy: Validator;
/** Check if value(s) are "falsy" */
export declare const isFalsy: Validator;
