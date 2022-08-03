/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql( `
        ALTER TABLE public.users
        ADD COLUMN phone_number VARCHAR NOT NULL DEFAULT '+38088888888',
        ADD COLUMN country_code VARCHAR NOT NULL DEFAULT 'UA' ,
        ADD COLUMN currency_code VARCHAR NOT NULL DEFAULT 'UAH',
        ADD COLUMN language_code VARCHAR NOT NULL DEFAULT 'ua';
    `)
};

exports.down = pgm => {};
