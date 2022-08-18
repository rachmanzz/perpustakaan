import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserType } from './entities/user.entity';
import { Card } from './entities/card.entity';
import { Profile } from './entities/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: Repository<User>,
    @Inject('CARD_REPOSITORY') private readonly cardRepository: Repository<Card>,
    @Inject('PROFILE_REPOSITORY') private readonly profileRepository: Repository<Profile>
  ) {}

  async hasRegisteredUser(): Promise<boolean> {
    // count users
    const count = await this.userRepository.count();
    return count > 0;
  }
  async create(type: UserType = UserType.VISITOR, createUserDto: CreateUserDto) {
    const user  = this.userRepository.create({...createUserDto, user_type: type, email_verified: false})
    return await this.userRepository.save(user);
  }

  async findUser(email: string): Promise<User> {
    return await this.userRepository.findOne({where: {email}, select: ['name', 'password', 'email', 'verified', 'email_verified', 'id', 'user_type']});
  }
}
