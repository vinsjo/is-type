var n=function(n){return function(){var t=[].slice.call(arguments);return 0!==t.length&&(1===t.length?n(t[0]):t.every(function(t){return n(t)}))}},t=n(function(n){return"number"==typeof n&&!Number.isNaN(n)}),r=n(function(n){return"number"==typeof n&&n<Infinity&&n>-Infinity&&!Number.isNaN(n)}),e=n(function(n){return"number"==typeof n&&!Number.isNaN(n)&&n%1==0}),u=n(function(n){return"number"==typeof n&&!Number.isNaN(n)&&n%1!=0}),i=n(function(n){return"string"==typeof n}),o=n(function(n){return"boolean"==typeof n}),f=n(function(n){return"object"==typeof n&&n instanceof Object}),c=n(Array.isArray),a=n(function(n){return"function"==typeof n}),N=n(function(n){return null===n}),y=n(function(n){return void 0===n}),b=n(function(n){return n instanceof Date}),s=n(function(n){return n instanceof Date&&!isNaN(Number(n))}),m=n(function(n){return!!n}),p=n(function(n){return!n});export{n as createTypeChecker,c as isArr,o as isBool,b as isDate,p as isFalsy,r as isFinite,u as isFloat,a as isFn,e as isInt,N as isNull,t as isNum,f as isObj,i as isStr,m as isTruthy,y as isUndef,s as isValidDate};
//# sourceMappingURL=index.mjs.map
