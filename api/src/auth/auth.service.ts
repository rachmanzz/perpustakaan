import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserType } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
    ){}

    async register(type: UserType = UserType.VISITOR, dto: CreateUserDto) {
        return await this.usersService.create(type, dto)
    }
}
