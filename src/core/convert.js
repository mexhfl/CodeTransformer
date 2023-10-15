const vscode = require('vscode');
const builtInFunctions = require('../presets/base')

function getBuildInFunctions() {
    let funcs = vscode.workspace.getConfiguration('CodeTransformer').get('buildInFunctions', [11, 22]);
    let ret = {}
    funcs.forEach(func => {
        ret[func.name] = new Function('return ' + func.code)()
    })
    return ret
}

const convertText = async (expression) => {

    const editor = vscode.window.activeTextEditor; // 获取当前活动的文本编辑器
    if (!editor) {
        vscode.window.showInformationMessage('没有活动的编辑器！');
        return
    }

    if (!expression) {
        return;
    }

    const document = editor.document;
    const selections = editor.selections;
    console.log("expression>>>>", expression)
    const fn = new Function("s", "l", "f", `return ${expression}`);



    Object.assign(builtInFunctions, getBuildInFunctions())

    console.log("builtInFunctions>>>", builtInFunctions)

    await editor.edit(editBuilder => {
        selections.forEach((selection) => {
            const line = selection.active.line;
            const lineText = document.lineAt(line).text;
            try {
                const transformedText = fn(lineText, selection.start.line + 1, builtInFunctions).toString();
                const position = new vscode.Position(line, selection.active.character);
                editBuilder.insert(position, transformedText);
            } catch (error) {
                vscode.window.showErrorMessage(`Error: ${error}`);
            }
        });
    });
}

module.exports = {
    convertText
}