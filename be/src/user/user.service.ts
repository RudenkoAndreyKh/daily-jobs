import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { UserSqlService } from './user-sql.service';

const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UserService {
  constructor(
    private readonly userSqlService: UserSqlService
  ) { }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    return await new Promise((res, rej) => {
      bcrypt.hash(user.password, saltRounds, async (err, hash) => {
        const result = await this.userSqlService.createUser({ ...user, password: hash });

        if (result.id) {
          res(result);
        }
        
        rej(`Create User Error: ${err}`);
      });
    });
  }
}
