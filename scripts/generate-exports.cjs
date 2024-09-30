// @ts-check
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(process.cwd(), 'src');
const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json');

const tsExtensionPattern = /\.ts$/;

/**
 * @typedef {{require?: `./dist/${string}.cjs`, import?: `./dist/${string}.mjs`,types: `./dist/${string}.d.ts`}} ExportDefinition
 */

(async () => {
    const files = await fs.promises.readdir(SRC_DIR);

    /**
     * @type {['.'|`./${string}`, ExportDefinition][]}
     */
    const exportsEntries = [];

    files.forEach((file) => {
        if (!tsExtensionPattern.test(file)) {
            return;
        }

        const name = file.replace(tsExtensionPattern, '');

        if (name === 'types') {
            exportsEntries.push(['./types', { types: `./dist/types.d.ts` }]);
        } else {
            exportsEntries.push([
                name === 'index' ? '.' : `./${name}`,
                {
                    require: `./dist/${name}.cjs`,
                    import: `./dist/${name}.mjs`,
                    types: `./dist/${name}.d.ts`,
                },
            ]);
        }
    });

    /**
     * @type {{exports: Record<string, ExportDefinition>} & Record<string, unknown>}
     */
    const packageJsonContent = await fs.promises
        .readFile(PACKAGE_JSON_PATH, 'utf-8')
        .then(JSON.parse);

    packageJsonContent.exports = Object.fromEntries(
        exportsEntries.sort(([a], [b]) => {
            if (a === '.') {
                return -1;
            }

            if (b === '.') {
                return 1;
            }

            return a.localeCompare(b, 'en', { sensitivity: 'base' });
        })
    );

    await fs.promises.writeFile(
        PACKAGE_JSON_PATH,
        JSON.stringify(packageJsonContent, null, 2)
    );
})();
