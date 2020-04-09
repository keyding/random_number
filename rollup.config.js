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
            // 排除 node_modules 下的所有，仅编译源代码
            exclude: 'node_modules/**',
            // 使plugin-transform-runtime生效
            runtimeHelpers: true
        }),
        // 压缩代码
        !isDev && terser()
    ],
    // 三方模块不打包进源码
    external: []
}