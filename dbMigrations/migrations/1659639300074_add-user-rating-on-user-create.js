/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql`
        CREATE OR REPLACE FUNCTION public.add_user_rating()
        RETURNS trigger
        LANGUAGE plpgsql
        AS $function$
            BEGIN
                INSERT INTO
                    users_rating(user_id)
                    VALUES(new.id);
            
                        RETURN new;
            END;
        $function$;

        CREATE TRIGGER add_user_rating_trigger
        AFTER INSERT ON users 
        FOR EACH ROW 
        EXECUTE FUNCTION add_user_rating('id');
    `;
};

exports.down = pgm => {};
