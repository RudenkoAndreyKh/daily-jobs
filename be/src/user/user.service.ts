import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginDataDto, UserDto } from './dto/user.dto';
import { UserSqlService } from './user-sql.service';
// import { jwt } from 'jsonwebtoken';

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UserService {
  constructor(
    private readonly userSqlService: UserSqlService,
  ) { }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    return await new Promise((res, rej) => {
      bcrypt.hash(user.password, saltRounds, async (err, hash) => {
        const result = await this.userSqlService.createUser({ ...user, password: hash });

        if (!result) {
          rej(`Create User Error: User is already exist.`);
        }

        const token = jwt.sign(
          { user_id: result.id, user_phone: result.phoneNumber },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );

        result.jwt = token;

        res(result);
      });
    });
  };

  async loginUser(userData: LoginDataDto): Promise<UserDto> {
    return await new Promise(async (res, rej) => {
      const result = await this.userSqlService.loginUser(userData);

      if (!result) {
        return rej('Bad credentials.');
      }

      bcrypt.hash(userData.password, saltRounds, async (err, hash) => {
        const compareResult = await bcrypt.compare(userData.password, hash);

        if (compareResult) {
          const token = jwt.sign(
            { user_id: result.id, user_phone: result.phoneNumber },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );

          result.jwt = token;

          return res(result);
        }
      });
    });
  };
}
