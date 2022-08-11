import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database.module';
import { userProviders } from './user.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [UsersController],
  providers: [...userProviders,UsersService]
})
export class UsersModule {}
