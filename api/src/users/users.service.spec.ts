import { Test, TestingModule } from '@nestjs/testing';
import { userProviders } from './user.providers.mock';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, ...userProviders],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return boolen of registered user", async () => {
    const result = await service.hasRegisteredUser();
    expect(result).toBe(true);
  })
});
