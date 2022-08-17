import { Controller, Get, Post, Body, Patch, Param, Delete, VERSION_NEUTRAL } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({path: 'users', version: VERSION_NEUTRAL})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('check')
  async hasRegisteredUser(): Promise<boolean> {
    const hasUser = await this.usersService.hasRegisteredUser();
    return hasUser;
  }
}
