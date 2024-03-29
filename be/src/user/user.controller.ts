import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto, LoginDataDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUser(
    @Body() data: CreateUserDto,
  ): Promise<UserDto> {
    return this.userService.createUser(data);
  }

  @Post('login-user')
  loginUser(
    @Body() loginData: LoginDataDto,
  ): Promise<UserDto> {
    return this.userService.loginUser(loginData);
  }
}
