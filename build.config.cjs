// @ts-check
const { defineBuildConfig } = require('unbuild');

export default defineBuildConfig({
    rollup: {
        emitCJS: true,
    },
});
