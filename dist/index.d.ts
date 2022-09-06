export declare type typeValidator = (x: any) => boolean;
export declare type typeChecker = (...values: any[]) => boolean;
/** Create typeChecker function */
declare const createTypeChecker: (validatorFn: typeValidator) => typeChecker;
/** Check if value(s) are of type 'number' and not NaN */
declare const isNum: typeChecker;
/** Check if value(s) are of type 'number', not NaN and integer value(s) */
declare const isInt: typeChecker;
/** Check if value(s) are of type 'number', not NaN and float value(s) */
declare const isFloat: typeChecker;
/** Check if value(s) are of type 'string' */
declare const isStr: typeChecker;
/** Check if value(s) are of type 'boolean' */
declare const isBool: typeChecker;
/** Check if value(s) are of type 'object' and instance(s) of Object constructor */
declare const isObj: typeChecker;
/** Check if value(s) are array(s), (uses Array.isArray) */
declare const isArr: typeChecker;
/** Check if value(s) are of type 'function' */
declare const isFn: typeChecker;
/** Check if value(s) are equal to null */
declare const isNull: typeChecker;
/** Check if value(s) are undefined */
declare const isUndef: typeChecker;
/** Check if value(s) are Date objects */
declare const isDate: typeChecker;
/** Check if value(s) are valid Date objects */
declare const isValidDate: typeChecker;
export { createTypeChecker, isNum, isInt, isFloat, isStr, isBool, isObj, isArr, isFn, isNull, isUndef, isDate, isValidDate, };
