/**
 * rollup 配置
 */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: ["./src/index.js"], // 入口文件
  output: {
    file: "./dist/bundle.js", // 输出文件
    format: "umd", // 输出格式
    name: "experience",
    banner: '// 头部信息', // 文件头部添加内容
    footer: '// 末尾信息' // 文件尾部添加内容
  },
  plugins: [resolve(), commonjs(), babel(), json()], // 插件引入
  external: ["the-answer"] // 告知rollup，内部值保持为外部组件引入
};