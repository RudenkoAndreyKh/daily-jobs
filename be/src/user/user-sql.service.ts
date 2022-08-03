import { Injectable } from "@nestjs/common";
import db from "src/db";
import convertSqlResultToReturn from "src/utils/convert-object-keys";
import { CreateUserDto } from "./dto/user.dto";
import { CreatedUser } from './interfaces/user.interface';

@Injectable()
export class UserSqlService {
    async createUser(user: CreateUserDto): Promise<CreatedUser> {
        const query: string = `
                INSERT INTO users(name, surname, full_name, login, password, birth_date, phone_number, country_code, currency_code, language_code) 
                    VALUES($<name>, $<surname>, $<fullName>, $<login>, $<password>, $<birthDate>, $<phoneNumber>, $<countryCode>, $<currencyCode>, $<languageCode>)
                    RETURNING id, name, surname, full_name, birth_date,phone_number;
            `;

        const result = await db.oneOrNone(query, user);
        result.birth_date = String(result.birth_date);

        if (!result || !result['id']) {
            return null;
        }

        return convertSqlResultToReturn(result);
    }
}
