declare type typeCheckCallback = (x: any) => Boolean;
declare type typeChecker = (...values: any) => Boolean;
/**
 * Create a type-checker function.
 * Returns a function that accepts any number of values and returns
 * true if all values result in a truthy return value by the validatorFn
 *
 * @param {(x: any) => boolean} typeCheckCallback   callback function used to check each value
 *
 * @example
 * const isStr = createTypeChecker((x) => typeof x === 'string');
 * isStr('Hello');
 * // => true
 * isStr('Hello', 'World');
 * // => true
 * isStr(1);
 * // => false
 * isStr('Hello', 1);
 * // => false
 */
function createTypeChecker(typeCheckCallback: typeCheckCallback): typeChecker {
	return (...values: any) => {
		if (values.length <= 1) return typeCheckCallback(values[0]);
		return values.reduce((result: boolean, current: any) => {
			return result && typeCheckCallback(current);
		}, true);
	};
}

export type { typeCheckCallback, typeChecker };
export { createTypeChecker };
