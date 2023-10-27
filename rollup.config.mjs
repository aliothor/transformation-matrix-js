import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'matrix.js',
    output: [
        {
            format: 'cjs',
            file:"dist/cjs/index.js"
        },
        {
            format: 'es',
            file:"dist/es/index.js"
        },
    ],
    plugins: [commonjs()],
};
