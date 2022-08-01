declare class CreateUserDto {
    name: string;
    surname: string;
    fullName: string;
    birthDate: Date;
    login: string;
    password: string;
}
declare class UserDto {
    id: number;
    name: string;
    surname: string;
    fullName: string;
    birthDate: string;
}
export { CreateUserDto, UserDto };
