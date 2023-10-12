const vscode = require('vscode');
const builtInFunctions = require('../presets/base')

const convertText = async () => {

    const editor = vscode.window.activeTextEditor; // 获取当前活动的文本编辑器
    if (!editor) {
        vscode.window.showInformationMessage('没有活动的编辑器！');
        return
    }
    const expression = await vscode.window.showInputBox({
        placeHolder: "s.toLowerCase()",
        prompt: "ConvertText:s curr line text,l curr line num,f buildIn functions"
    });
    if (!expression) {
        return;
    }

    const document = editor.document;
    const selections = editor.selections;
    const fn = new Function("s", "l", "f", `return ${expression}`);

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
vscode.window.showInformationMessage('convert text called');

module.exports = {
    convertText
}