import { describe, expect, test } from '@jest/globals';
import * as x from '../src';

const createTest = (
    name: keyof typeof x,
    expectedFalseArgs: unknown[],
    expectedTrueArgs: unknown[]
) => {
    const typeChecker = x[name];
    const onUnexpected = (arg: unknown, result: boolean) => {
        console.log(
            `unexpected result: ${name}(${arg || String(arg)}) === ${result}`
        );
    };

    describe(name, () => {
        test('expect false', () => {
            for (const arg of expectedFalseArgs) {
                const result = typeChecker(arg);
                if (result) onUnexpected(arg, result);
                expect(result).toBe(false);
            }
        });
        test('expect true', () => {
            for (const arg of expectedTrueArgs) {
                const result = typeChecker(arg);
                if (!result) onUnexpected(arg, result);
                expect(result).toBe(true);
            }
        });
    });
};

createTest('isNum', ['', NaN], [1, 100]);
createTest('isStr', [1, null], ['', String()]);
createTest('isBool', [null, undefined, '', 0], [true, false]);
createTest('isObj', [null, '', Symbol(1)], [{}, [], new Date()]);
createTest('isArr', [{}, new Set()], [[], Array(1)]);
createTest(
    'isFn',
    [null, {}, 1],
    [
        () => {
            return 1;
        },
        function () {
            return 1;
        },
    ]
);

createTest('isNull', [undefined, false, 0, {}], [null]);
createTest('isUndef', [null, 0, false], [undefined]);
createTest('isDate', [{}, new Date().toString()], [new Date()]);
createTest('isSymbol', [{}, [], '', 1], [Symbol(1)]);
createTest('isMap', [[], {}, new Set()], [new Map()]);
createTest('isSet', [[], {}, new Map()], [new Set()]);
createTest('isInt', [1.1, NaN, Infinity], [1, 2, 3]);
createTest('isFloat', [1, NaN, Infinity], [1.1, 3.14]);
createTest(
    'isValidDate',
    [{}, new Date().toString(), new Date('invalid')],
    [new Date(), new Date('1970-01-01')]
);
