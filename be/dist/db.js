"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = exports.ColumnSet = exports.concat = exports.initialize = void 0;
const pgPromise = require("pg-promise");
const config_1 = require("./config");
const DB_CONNECTION_STRING = config_1.config.DB_CONNECTION_STRING;
const pgp = pgPromise({
    capSQL: true,
});
const db = pgp(DB_CONNECTION_STRING);
const initialize = async () => {
    try {
        console.log('initializing pg-promise');
        await db.one('select 1 as x');
        console.log('initialized pg-promise successfully');
    }
    catch (e) {
        console.error(e);
        console.error('failed to initialize pg-promise, exiting process');
        process.exit(1);
    }
};
exports.initialize = initialize;
const concat = pgp.helpers.concat;
exports.concat = concat;
const ColumnSet = pgp.helpers.ColumnSet;
exports.ColumnSet = ColumnSet;
const insert = pgp.helpers.insert;
exports.insert = insert;
exports.default = db;
//# sourceMappingURL=db.js.map