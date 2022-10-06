/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE SEQUENCE IF NOT EXISTS "public"."jobs_id_seq";
        CREATE TABLE "public"."jobs"(
            "id" int4 NOT NULL DEFAULT nextval('jobs_id_seq':: regclass),
            "user_id" integer NOT NULL,
            "label" text NOT NULL,
            "description" text NOT NULL,
            "job_tags" text[],
            "worker_id" integer,

            PRIMARY KEY("id"),

            FOREIGN KEY(user_id) 
	        REFERENCES users(id),

            FOREIGN KEY(worker_id) 
	        REFERENCES workers("id")
        );
    `)
};

exports.down = pgm => {};