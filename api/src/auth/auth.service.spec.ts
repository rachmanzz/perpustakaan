import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users/users.service';
import { userProviders } from '@apps/users/user.providers.mock';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        JwtModule.register({
          secret: process.env.SECRET || 'secret',
          signOptions: { expiresIn: "24h" }
        })
      ],
      providers: [AuthService, UsersService, LocalStrategy, JwtStrategy, ...userProviders],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
