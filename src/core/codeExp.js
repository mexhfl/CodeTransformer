const vscode = require('vscode');
const { convertText } = require('./convert');

const codeExp = async () => {
    const expression = await vscode.window.showInputBox({
        placeHolder: "s.toLowerCase()",
        prompt: "available parameters: (s for current line text, l for current line number, f for built-in functions) => {}"
    });

    convertText(expression)
}

module.exports = {
    codeExp
}