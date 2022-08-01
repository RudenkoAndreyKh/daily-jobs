import { Module } from '@nestjs/common';
import { UserSqlService } from './user/user-sql.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserSqlService],
})
export class AppModule {}
