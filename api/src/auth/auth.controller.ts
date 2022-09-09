import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { Body, Controller, Get, Post, Request,
  UseGuards, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { retry } from 'rxjs';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User, UserType } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';


@Controller({ path: 'auth', version: VERSION_NEUTRAL })
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  async register(@Body() dto: CreateUserDto): Promise<User> {
    try {
      const user = await this.authService.register(UserType.VISITOR,dto);
      return user;
    } catch (error) {
      return error;
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('check')
  async checkStatus (@Request() req) {
    return req.user
  }
}
