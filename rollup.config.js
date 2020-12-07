/**
 * rollup 配置
 */
import path from 'path'
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
// import { eslint } from 'rollup-plugin-eslint' // 使用eslint检查需要在根目录添加.eslintrc.js文件
import babel from "@rollup/plugin-babel"
import ts from 'rollup-plugin-typescript2'
import json from "@rollup/plugin-json"

const getPath = _path => path.resolve(__dirname, _path)

const extensions = [
  '.js',
  '.ts'
]

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})

// eslint
// const esPlugin = eslint({
//   throwOnError: true,
//   include: ['src/**/*.ts'],
//   exclude: ['node_modules/**', 'dist/**']
// })

export default {
  input: ["./src/index.js"], // 入口文件
  output: {
    file: "./dist/bundle.js", // 输出文件
    format: "umd", // 输出格式(amd: require, cjs: CommonJS, es: ES模块, iife: 立即调用函数，umd: 通用模块定义，包含amd、cjs、iife, system: systemJs加载的本地格式)
    name: "bundle",  // script标签方式引入，输出内容在window上挂载的方法名
    banner: '// 头部信息', // 文件头部添加内容
    footer: '// 末尾信息' // 文件尾部添加内容
  },
  plugins: [
    resolve(extensions),
    commonjs(),
    babel(),
    json(),
    tsPlugin
    // esPlugin
  ], // 插件引入
  external: [
    "the-answer"
  ] // 告知rollup，内部值保持为外部组件引入
};