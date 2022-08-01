import * as pgPromise from 'pg-promise';
declare const db: pgPromise.IDatabase<{}, import("pg-promise/typescript/pg-subset").IClient>;
declare const initialize: () => Promise<void>;
declare const concat: (queries: (string | pgPromise.QueryFile | {
    query: string | pgPromise.QueryFile;
    values?: any;
    options?: pgPromise.IFormattingOptions;
})[]) => string;
declare const ColumnSet: typeof pgPromise.ColumnSet;
declare const insert: (data: object | object[], columns?: pgPromise.QueryColumns<any>, table?: string | pgPromise.ITable | pgPromise.TableName) => string;
export { initialize, concat, ColumnSet, insert };
export default db;
