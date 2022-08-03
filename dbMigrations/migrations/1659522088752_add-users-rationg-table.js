/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE SEQUENCE IF NOT EXISTS "public"."users_rating_id_seq";
        CREATE TABLE "public"."users_rating"(
            "id" int4 NOT NULL DEFAULT nextval('users_rating_id_seq':: regclass),
            "value" integer NOT NULL DEFAULT 0,
            "ratings_number" SERIAL NOT NULL,
            "user_id" integer NOT NULL,
            PRIMARY KEY("id")
        );
    `)
};

exports.down = pgm => {};
