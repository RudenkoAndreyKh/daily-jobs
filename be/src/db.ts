import * as pgPromise from 'pg-promise';

import { config } from './config';

const DB_CONNECTION_STRING = config.DB_CONNECTION_STRING;

const pgp = pgPromise({
    /* Initialization Options */
    capSQL: true,
});

const db = pgp(DB_CONNECTION_STRING);

const initialize = async () => {
    try {
        console.log('initializing pg-promise');
        await db.one('select 1 as x');
        console.log('initialized pg-promise successfully');
    } catch (e) {
        console.error(e);
        console.error('failed to initialize pg-promise, exiting process');
        process.exit(1);
    }
}

const concat = pgp.helpers.concat;
const ColumnSet = pgp.helpers.ColumnSet;
const insert = pgp.helpers.insert;

export { initialize, concat, ColumnSet, insert };
export default db;