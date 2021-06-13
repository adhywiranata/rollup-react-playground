import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		external: ['react', '@babel/runtime'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [json(), babel({ babelHelpers: 'runtime' })]
	}
];
