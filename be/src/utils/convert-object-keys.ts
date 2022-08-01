const changeKey = (key) => key.split('_').map((name, index) => {
    if (index !== 0) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return name
}).join('');

// changes the keys in object like 'key_name' to 'keyName'
const convertSqlResultToReturn = (object) => Object.keys(object).reduce(
    (acc, key) => {
        if (typeof object[key] === 'object') {
            return ({
                ...acc,
                ...{ [changeKey(key)]: convertSqlResultToReturn(object[key]) }
            })
        }
        return ({
            ...acc,
            ...{ [changeKey(key)]: object[key] }
        })
    },
    {}
);

export default convertSqlResultToReturn;