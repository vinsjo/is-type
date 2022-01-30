const isNum = x => typeof x === 'number' && !Number.isNaN(x);
const isInt = x => isNum(x) && x % 1 === 0;
const isFloat = x => isNum(x) && !isInt(x);
const isStr = x => typeof x === 'string';
const isObj = x => typeof x === 'object' && x instanceof Object;
const isArr = x => Array.isArray(x);
const isFn = x => typeof x === 'function';
const isBool = x => typeof x === 'boolean';

module.exports = {
	isNum: isNum,
	isInt: isInt,
	isFloat: isFloat,
	isStr: isStr,
	isObj: isObj,
	isArr: isArr,
	isFn: isFn,
	isBool: isBool,
};
