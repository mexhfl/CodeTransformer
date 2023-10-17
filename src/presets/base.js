const builtInFunctions = {
    toCamelCase: (str) => {
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    },
    toSnakeCase: (str) => {
     return str.replace(/([A-Z])/g, "_$1").toLowerCase();
    }
}
module.exports = builtInFunctions