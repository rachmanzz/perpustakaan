import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserType } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    isMatch = async (password: string, hash: string) => await bcrypt.compare(password, hash);

    async register(type: UserType = UserType.VISITOR, dto: CreateUserDto) {
        return await this.usersService.create(type, dto)
    }


    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email)
        if (user && await this.isMatch(password, user.password)) {
            const {password, ...result} = user
            return result
        }
        return null
    }

    async login (user: any) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        const current_user = {email: user.email, user_type: user.user_type, email_verified: user.email_verified, accessToken}
        return current_user
    }
}
