import { Body, Controller, Post, VERSION_NEUTRAL } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, UserType } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

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
}
