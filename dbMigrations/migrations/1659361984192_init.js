/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE SEQUENCE IF NOT EXISTS "public"."language_id_seq";
        CREATE TABLE "public"."languages"(
            "id" int4 NOT NULL DEFAULT nextval('public.language_id_seq':: regclass),
            "code" text NOT NULL UNIQUE,
            "name" text NOT NULL,
            "created_at" timestamptz NOT NULL DEFAULT now(),
            PRIMARY KEY("id")
        );
        
        INSERT INTO languages(code, name) VALUES('ua', 'Ukrainian'); 
        INSERT INTO languages(code, name) VALUES('en', 'English');  
        
        CREATE SEQUENCE IF NOT EXISTS "public"."currency_id_seq";
        CREATE TABLE "public"."currencies"(
            "id" int4 NOT NULL DEFAULT nextval('public.currency_id_seq':: regclass),
            "code" text NOT NULL UNIQUE,
            "name" text NOT NULL,
            "created_at" timestamptz NOT NULL DEFAULT now(),
            PRIMARY KEY("id")
        );

        INSERT INTO currencies (code, name) VALUES ('UAH', 'Hryvnia'); 
        INSERT INTO currencies (code, name) VALUES ('GBP', 'British Pound Sterling'); 
        INSERT INTO currencies (code, name) VALUES ('EUR', 'Euro'); 
        INSERT INTO currencies (code, name) VALUES ('USD', 'US Dollar'); 

        CREATE SEQUENCE IF NOT EXISTS "public"."country_id_seq";
        CREATE TABLE "public"."countries" (
            "id" int4 NOT NULL DEFAULT nextval('public.country_id_seq'::regclass),
            "code" text NOT NULL UNIQUE,
            "name" text NOT NULL,
            "default_language_code" text NOT NULL REFERENCES languages (code),
            "default_currency_code" text NOT NULL REFERENCES currencies (code),
            "phone_prefix" text NOT NULL UNIQUE,
            "created_at" timestamptz NOT NULL DEFAULT now(),
            PRIMARY KEY ("id")
        );
        
        INSERT INTO countries (code, name, default_language_code, default_currency_code, phone_prefix) VALUES ('uk', 'United Kingdomp', 'en', 'GBP', '+44'); 
        INSERT INTO countries (code, name, default_language_code, default_currency_code, phone_prefix) VALUES ('ua', 'Ukraine', 'ua', 'UAH', '+380'); 
        INSERT INTO countries (code, name, default_language_code, default_currency_code, phone_prefix) VALUES ('us', 'United States', 'en', 'USD', '+1'); 
    `)
};

exports.down = pgm => { };
