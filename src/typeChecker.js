/**
 * Create a type-checker function.
 * Returns a function that accepts any number of values and returns
 * true if all values result in a truthy return value when passed to the
 * 'checkerCallback' function
 *
 * @param {Function} testerFunction
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
function createTypeChecker(testerFunction) {
	return (...values) => values.every(testerFunction);
}

export { createTypeChecker };
