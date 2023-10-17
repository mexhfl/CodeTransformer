# Code Transformer

"Code Transformer" is a Visual Studio Code extension that allows you to transform or process code by executing custom JavaScript expressions or preset expressions.

## Features

### Basic Usage

No configuration is required. Simply use the ``transform code extension`` command to manually input an expression.

#### Parameters

The parameters that can be used in the expression are:

- ``s``: Current line of text
- ``l``: Current line number
- ``f``: Built-in function object

#### Example: Reverse the current line of text

1. Select the line of text you want to process.
2. Open the command palette and execute the ``transform code extension`` command.
3. In the input box that appears, type ``s.split('').reverse().join('')``.
4. After execution, the selected line of text will be reversed.

### Advanced Usage

#### 1. Using Built-in Functions

You can configure built-in functions in the settings panel to call these functions in expressions.

##### Example: Configure a built-in function to transform text to snake_case

1. Open settings and navigate to the Code Transformer settings.
2. In the "Built-in Functions" section, add a new function, for example:

```json
[
    {
        "name": "toSnakeCase",
        "code": "(str) => { return str.replace(/([A-Z])/g, '_$1').toLowerCase(); }"
    }
]
```

3. Save the settings.
4. Now you can use ``f.toSnakeCase(s)`` in the input box for the ``transform code extension`` command or in preset expressions.

#### 2. Using Preset Expressions

You can configure preset expressions in the settings panel for quick selection and execution.

##### Example: Configure a preset expression

1. Open settings and navigate to the Code Transformer settings.
2. In the "Preset Expressions" section, add a new expression, for example:

```json
[
    {
        "name": "toSnakeCaseExp",
        "code": "f.toSnakeCase(s)"
    }
]
```

3. Save the settings.
4. Now you can open the list of preset expressions (quickPick) via the ``transform pick extension`` command and choose this preset expression for execution.

## Support

Licensed under the MIT License.

For any questions or suggestions, please contact us.
