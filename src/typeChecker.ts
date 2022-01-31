/**
 * Create a type-checker function.
 * Returns a function that accepts any number of values and returns
 * true if all values result in a truthy return value when passed to the
 * 'checkerCallback' function
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
function createTypeChecker(
	checkerCallback: (x: any) => Boolean
): (...values: any) => Boolean {
	return (...values: any) => {
		if (values.length <= 1) return checkerCallback(values[0]);
		return values.reduce((result: boolean, current: any) => {
			return result && checkerCallback(current);
		}, true);
	};
}
export { createTypeChecker };
