const vscode = require('vscode');
const builtInFunctions = require('../presets/base')
const { convertText } = require('./convert');


function getPresetExpressions() {
    return vscode.workspace.getConfiguration('CodeTransformer').get('presetExpressions', []);
}


const pickExp = () => {
    const quickPick = vscode.window.createQuickPick();
    let exps = getPresetExpressions()

    quickPick.items = exps.map(item => {
        return {
            label: item.name,
            description: item.code
        }
    })
    let selectedExpression = '';
    quickPick.show();

    quickPick.onDidChangeSelection(selection => {
        console.log("selection>>>", selection[0])
        convertText(selection[0].description)
        quickPick.hide();
    });

}

module.exports = {
    pickExp
}