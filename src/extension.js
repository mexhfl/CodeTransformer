const vscode = require('vscode');
const {codeExp} = require('./core/codeExp');
const {pickExp} = require('./core/pickExp');

function activate(context) {
	console.log('Congratulations, your extension "code-transformer" is now active!');

	let disposable1 = vscode.commands.registerCommand('CodeTransformer.CodeExpression', codeExp);
	let disposable2 = vscode.commands.registerCommand('CodeTransformer.PickExpression', pickExp);
	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
