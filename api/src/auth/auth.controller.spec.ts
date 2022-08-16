import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { userProviders } from '../users/user.providers.mock';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: process.env.SECRET || 'secret',
          signOptions: { expiresIn: "24h" }
        })
      ],
      controllers: [AuthController],
      providers: [AuthService, UsersService, LocalStrategy, JwtStrategy, ...userProviders],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
