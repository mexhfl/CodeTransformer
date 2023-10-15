const vscode = require('vscode');
const builtInFunctions = require('../presets/base')
const { convertText } = require('./convert');


const codeExp = async () => {
    const expression = await vscode.window.showInputBox({
        placeHolder: "s.toLowerCase()",
        prompt: "ConvertText:s curr line text,l curr line num,f buildIn functions"
    });

    convertText(expression)
}

module.exports = {
    codeExp
}