import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserType } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: Repository<User>
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
