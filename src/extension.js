const vscode = require('vscode');
const {convertText} = require('./core/convert');

function activate(context) {
	console.log('Congratulations, your extension "convert-text" is now active!');

	let disposable = vscode.commands.registerCommand('convertText.convert', convertText);
	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
