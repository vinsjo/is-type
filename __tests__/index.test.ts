import { describe, expect, test } from '@jest/globals';
import * as x from '../src';

const args = (...values: unknown[]): unknown[][] => values.map((arg) => [arg]);

const createTest = (
    name: keyof typeof x,
    expectedFalseArgs: unknown[][],
    expectedTrueArgs: unknown[][]
) => {
    const typeChecker = x[name] as (...args: unknown[]) => boolean;
    const onUnexpected = (args: unknown[], result: boolean) => {
        console.log(
            `unexpected result: ${name}(${args
                .map((arg) => String(arg))
                .join(', ')}) === ${result}`
        );
    };

    describe(name, () => {
        test('expect false', () => {
            for (const args of expectedFalseArgs) {
                const result = typeChecker(...args);
                if (result) onUnexpected(args, result);
                expect(result).toBe(false);
            }
        });
        test('expect true', () => {
            for (const args of expectedTrueArgs) {
                const result = typeChecker(...args);
                if (!result) onUnexpected(args, result);
                expect(result).toBe(true);
            }
        });
    });
};

createTest(
    'isNum',
    [[''], [NaN], [NaN, true], [NaN, undefined], [NaN, 'false']],
    [[1], [100], [NaN, false]]
);
createTest('isStr', args(1, null, {}), args('', String()));
createTest('isBool', args(null, undefined, '', 0), args(true, false));
createTest('isObj', args(null, '', Symbol(1)), args({}, [], new Date()));
createTest('isArr', args({}, new Set(), new Map()), args([], Array(1)));
createTest(
    'isFn',
    args(null, {}, 1),
    args(
        () => {
            return 1;
        },
        function () {
            return 1;
        }
    )
);

createTest('isNull', args(undefined, false, 0, {}), args(null));
createTest('isUndef', args(null, 0, false, NaN), args(undefined));
createTest(
    'isNullish',
    args(false, 0, 'undefined', NaN),
    args(null, undefined)
);
createTest('isDate', args({}, new Date().toString(), 0), args(new Date()));
createTest('isSymbol', args({}, [], '', 1), args(Symbol(1)));
createTest('isMap', args([], {}, new Set()), args());
createTest('isSet', args([], {}, new Map()), args(new Set()));
createTest('isInt', args(1.1, NaN, Infinity), args(1, 2, 3));
createTest('isFloat', args(1, NaN, Infinity), args(1.1, 3.14, 0.0000000001));
createTest(
    'isValidDate',
    args({}, new Date().toString(), new Date('invalid')),
    args(new Date(), new Date('1970-01-01'))
);
