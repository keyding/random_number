import babel from "rollup-plugin-babel";
import {eslint} from 'rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json';

const isDev = process.env.NODE_ENV !== 'production';

export default {
    input: 'src/main.js',
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
        { file: pkg.browser, name: pkg.name.split('/')[1], format: 'umd' }
    ],
    // 使用插件
    plugins: [
        // 主要解决兼容引入node模块
        resolve(),
        commonjs(),
        eslint({
            throwOnError: true,
            throwOnWarning: true,
            include: ['src/**'],
            exclude: ['node_modules/**']
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
        }),
        !isDev && terser()
    ],
    external: []
}