/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE SEQUENCE IF NOT EXISTS "public"."users_id_seq";
        CREATE TABLE "public"."users"(
            "id" int4 NOT NULL DEFAULT nextval('public.users_id_seq':: regclass),
            "name" text NOT NULL,
            "surname" text NOT NULL,
            "full_name" text NOT NULL,
            "login" text NOT NULL UNIQUE,
            "password" text NOT NULL,
            "birth_date" timestamptz NOT NULL,
            "created_at" timestamptz NOT NULL DEFAULT now(),
            PRIMARY KEY("id")
        );
    `);
};

exports.down = pgm => {};
