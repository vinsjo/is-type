export type map = Map<unknown, unknown>;
export type set = Set<unknown>;
export type fn = (...args: unknown[]) => unknown;
export type arr = Array<unknown>;
export type obj = { [k: string | number | symbol]: unknown };
export type nullish = undefined | null;

export type DefaultValidatorRT<X, T = unknown> = unknown extends T
	? boolean
	: X extends T
	? true
	: false;
export type ObjValidatorRT<X> = X extends obj
	? X extends fn | arr
		? false
		: true
	: false;
export type TSUncertainRT<X, T = unknown> = unknown extends T
	? boolean
	: X extends T
	? boolean
	: false;

export type DefaultValidator<T = unknown> = <X = undefined>(
	x?: X
) => DefaultValidatorRT<X, T>;
export type ObjValidator = <X = undefined>(x?: X) => ObjValidatorRT<X>;
export type TSUncertainValidator<T = unknown> = <X = undefined>(
	x?: X
) => TSUncertainRT<X, T>;
export type Validator<T = unknown> =
	| DefaultValidator<T>
	| TSUncertainValidator<T>
	| ObjValidator
	| ((x?: unknown) => boolean);

/** Check if typeof x is 'number' and x is not NaN
 * TS return type incorrect if x is NaN
 */
export const isNum = (<X>(x?: X) =>
	typeof x === 'number' && !Number.isNaN(x)) as DefaultValidator<number>;
/** Check if typeof x is 'string' */
export const isStr = (<X>(x?: X) =>
	typeof x === 'string') as DefaultValidator<string>;
/** Check if typeof x is 'boolean' */
export const isBool = (<X>(x?: X) =>
	typeof x === 'boolean') as DefaultValidator<boolean>;
/** Check if typeof x is 'object', x is not null and x is instanceof Object */
export const isObj = (<X>(x?: X) =>
	x !== null && typeof x === 'object' && x instanceof Object) as ObjValidator;
/** Check if x is an array (uses Array.isArray) */
export const isArr = (<X>(x?: X) => Array.isArray(x)) as DefaultValidator<arr>;
/** Check if typeof x is 'function' */
export const isFn = (<X>(x?: X) =>
	typeof x === 'function') as DefaultValidator<fn>;
/** Check if x is null */
export const isNull = (<X>(x?: X) => x === null) as DefaultValidator<null>;
/** Check if x is undefined */
export const isUndef = (<X = undefined>(x?: X) =>
	x === undefined) as DefaultValidator<undefined>;

/** Check if x is null or undefined */
export const isNullish = (<X = undefined>(x?: X) =>
	x === undefined || x === null) as DefaultValidator<null | undefined>;

/** Check if x is instanceof DateConstructor */
export const isDate = (<X>(x?: X) =>
	x instanceof Date) as DefaultValidator<Date>;

/** Check if typeof x is 'symbol' */
export const isSymbol = (<X>(x?: X) =>
	typeof x === 'symbol') as DefaultValidator<symbol>;
/** Check if x is instanceof MapConstructor */
export const isMap = (<X>(x?: X) => x instanceof Map) as DefaultValidator<map>;
/** Check if x is instanceof SetConstructor */
export const isSet = (<X>(x?: X) => x instanceof Set) as DefaultValidator<set>;

// TS UNCERTAIN RETURN TYPES
/**
 * Check if typeof x is 'number', x is not
 * NaN and x is an integer
 */
export const isInt = (<X>(x?: X) =>
	typeof x === 'number' && x % 1 === 0) as TSUncertainValidator<number>;
/**
 * Check if typeof x is 'number', x is not
 * NaN and x is a float value
 */
export const isFloat = (<X>(x?: X) =>
	typeof x === 'number' &&
	!Number.isNaN(x % 1) &&
	x % 1 !== 0) as TSUncertainValidator<number>;
/** Check if x is instanceof Date and contains a valid date */
export const isValidDate = (<X>(x?: X) =>
	x instanceof Date &&
	!Number.isNaN(x.getTime())) as TSUncertainValidator<Date>;
