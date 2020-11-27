### rollup -f -o -c -w

-f。-f参数是--format的缩写，它表示生成代码的格式，amd表示采用AMD标准，cjs为CommonJS标准，esm（或 es）为ES模块标准。-f的值可以为amd、cjs、system、esm（'es’也可以）、iife或umd中的任何一个。
-o。-o指定了输出的路径，这里我们将打包后的文件输出到dist目录下的bundle.js
其实除了这两个，还有很多其他常用的命令（这里我暂且列举剩下两个也比较常用的，完整的rollup 命令行参数）：

-c。指定rollup的配置文件。
-w。监听源文件是否有改动，如果有改动，重新打包。

### @rollup/plugin-node-resolve
将我们编写的源码与依赖的第三方库进行合并，rollup.js为我们提供了resolve插件

### @rollup/plugin-commonjs
rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm模块不能直接编译使用。

### @rollup/plugin-commonjs
使rollup.js编译支持npm模块和CommonJS模块方式

### @rollup/plugin-babel
代码转为es5

### @babel/core
为@rollup/plugin-babel核心，必须配套使用

### 添加.babelrc文件，安装@babel/preset-env插件
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        // "useBuiltIns": "usage"
      }
    ]
  ]
}

### @rollup/plugin-json
用来支持json文件
