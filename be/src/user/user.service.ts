import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserSqlService } from './user-sql.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userSqlService: UserSqlService
  ) {}

  async createUser(user: CreateUserDto): Promise<UserDto> {
    const result = await this.userSqlService.createUser(user);
    return {
      ...result
    };
  }
}
