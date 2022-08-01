import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserSqlService } from './user-sql.service';
export declare class UserService {
    private readonly userSqlService;
    constructor(userSqlService: UserSqlService);
    createUser(user: CreateUserDto): Promise<UserDto>;
}
