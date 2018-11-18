import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export const LIBRARY_VAR_NAME = 'BaseComponents';

export const plugins = [
  resolve(),
  babel({
    presets: [
      [
        'module:metro-react-native-babel-preset',
        { disableImportExportTransform: true },
      ],
    ],
    plugins: ['@babel/plugin-external-helpers'],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    externalHelpers: true,
    babelrc: false,
  }),
  commonjs(),
  json(),
];

export const makeCJSConfig = (sourceFile, targetFile) => ({
  input: `source/${sourceFile}.js`,
  output: [
    {
      file: `${targetFile}.js`,
      sourcemap: true,
      exports: 'named',
      format: 'cjs',
    },
  ],
  plugins,
  external: [
    'react',
    'react-native',
    'prop-types',
    '@actualwave/is-function',
    '@actualwave/closure-value',
  ],
});
