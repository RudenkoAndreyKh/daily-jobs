import {
    IsCurrency,
    IsDate,
    isNotEmpty,
    IsNotEmpty,
    IsNumber,
    IsPhoneNumber,
    IsString,
    MinLength
} from "class-validator";
import { ApiStatus } from "src/enums/api-status";

class CreateUserDto {
    @IsNotEmpty({
        message: ApiStatus.EMPTY_NAME,
    })
    @IsString()
    name: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_SURNAME,
    })
    @IsString()
    surname: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_FULLNAME,
    })
    @IsString()
    fullName: string;
    @IsDate()
    birthDate: Date;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_LOGIN,
    })
    @IsString()
    login: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_PASSWORD,
    })
    @MinLength(8)
    @IsString()
    password: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_PHONE_NUMBER,
    })
    @IsString()
    @IsPhoneNumber()
    phoneNumber: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_COUNTRY_CODE,
    })
    @IsString()
    countryCode: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_LANGUAGE_CODE,
    })
    @IsString()
    languageCode: string;
    @IsNotEmpty({
        message: ApiStatus.EMPTY_CURRENCY_CODE,
    })
    @IsCurrency()
    currencyCode: string;
};

class UserDto {
    id: number;
    name: string;
    surname: string;
    fullName: string;
    birthDate: string;
    phoneNumber: string;
    countryCode: string;
    currencyCode: string;
    languageCode: string;
    jwt?: string;
};

class LoginDataDto {
    @IsNotEmpty({
        message: ApiStatus.EMPTY_LOGIN,
    })
    @IsString()
    login: string;

    @IsNotEmpty({
        message: ApiStatus.EMPTY_PASSWORD,
    })
    @IsString()
    password: string;
};

export {
    CreateUserDto,
    UserDto,
    LoginDataDto,
};
