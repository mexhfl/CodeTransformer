# Code Transformer

“Code Transformer”是一个 Visual Studio Code 插件，用于通过执行自定义的 JavaScript 表达式或预设表达式来转换或处理代码。

# 功能

基础用法：不需任何配置，直接通过transform code extension命令手动输入表达式。

高级用法：包括内置函数配置和预设表达式配置，通过这些预先配置，您可以更灵活地处理文本。
如何使用

# 基础用法

在没有进行任何配置的情况下，您可以直接使用 transform code extension 命令来执行表达式。

## 参数

表达式中可使用的参数有：

s: 当前行文本

l: 当前行号

f: 内置函数对象

## 用例：将当前行文本反转

选中您要处理的文本行。

打开命令面板并执行 transform code extension 命令。

在出现的输入框里输入 s.split('').reverse().join('')。

执行后，选中的文本行将被反转。

# 高级用法

## 1. 内置函数用法

通过在设置面板中配置内置函数，您可以在表达式中调用这些函数。

用例：配置一个转为蛇形命名（snake_case）的内置函数

打开设置，找到 Code Transformer 的设置项。

在“内置函数”部分添加一个新的函数，例如：

```json
[
    {
        "name": "toSnakeCase",
        "code": "(str) => { return str.replace(/([A-Z])/g, '_$1').toLowerCase(); }"
    }
]
```

保存设置。

现在您可以在 transform code extension 命令的输入框或预设表达式中使用 f.toSnakeCase(s)。

## 2. 预设表达式用法

通过在设置面板中配置预设表达式，您可以快速选择和执行表达式。

用例：配置一个预设表达式

打开设置，找到 Code Transformer 的设置项。

在“预设表达式”部分添加一个新的表达式，例如：

```json
[
    {
        "name": "toSnakeCaseExp",
        "code": "f.toSnakeCase(s)"
    }
]
```
保存设置。

现在，您可以通过 transform pick extension 命令打开预设表达式列表（quickPick）并选择该预设表达式进行执行。

以上便是该插件的基础和高级用法，希望能帮助您更方便地使用“Code Transformer”插件。

# 支持

基于MIT License。

如有任何问题或建议，请联系我们。



