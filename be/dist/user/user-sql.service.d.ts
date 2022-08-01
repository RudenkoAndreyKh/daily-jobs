import { CreateUserDto } from "./dto/user.dto";
import { CreatedUser } from './interfaces/user.interface';
export declare class UserSqlService {
    createUser(user: CreateUserDto): Promise<CreatedUser>;
}
