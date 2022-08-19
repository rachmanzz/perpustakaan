import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database.module';
import { userProviders } from './user.providers';
import { RegionsModule } from '@apps/regions/regions.module';

@Module({
  imports: [
    DatabaseModule,
    RegionsModule
  ],
  controllers: [UsersController],
  providers: [...userProviders,UsersService],
  exports: [UsersService]
})
export class UsersModule {}
