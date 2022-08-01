import { IsDate, IsNotEmpty, IsString, MinLength } from "class-validator";
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
};

class UserDto {
    id: number;
    name: string;
    surname: string;
    fullName: string;
    birthDate: string;
}

export {
    CreateUserDto,
    UserDto
}