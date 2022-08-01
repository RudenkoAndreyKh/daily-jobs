"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeKey = (key) => key.split('_').map((name, index) => {
    if (index !== 0) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return name;
}).join('');
const convertSqlResultToReturn = (object) => Object.keys(object).reduce((acc, key) => {
    if (typeof object[key] === 'object') {
        return (Object.assign(Object.assign({}, acc), { [changeKey(key)]: convertSqlResultToReturn(object[key]) }));
    }
    return (Object.assign(Object.assign({}, acc), { [changeKey(key)]: object[key] }));
}, {});
exports.default = convertSqlResultToReturn;
//# sourceMappingURL=convert-object-keys.js.map