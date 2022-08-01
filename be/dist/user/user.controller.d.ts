import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(data: CreateUserDto): Promise<UserDto>;
}
