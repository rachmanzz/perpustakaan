import { Controller, Get, Post, Body, Patch, Param, Delete, VERSION_NEUTRAL, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';
import { UpdateCardDto } from './dto/update-card.dto';
import { CreateProfileAndAddressDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller({path: 'users', version: VERSION_NEUTRAL})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('check')
  async hasRegisteredUser(): Promise<boolean> {
    const hasUser = await this.usersService.hasRegisteredUser();
    return hasUser;
  }


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post("card")
  async createCard(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return await this.usersService.createCard(createCardDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('card/:id')
  async findCard(@Param('id') id: string): Promise<Card> {
    return await this.usersService.findOneCard(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Patch('card/:id')
  async updateCard(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto): Promise<Card> {
    return await this.usersService.updateCard(+id, updateCardDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete('card/:id')
  async deleteCard(@Param('id') id: string): Promise<Card> {
    return await this.usersService.deleteCard(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post("profile")
  async createProfile(@Body() dto: CreateProfileAndAddressDto): Promise<Profile> {
    return await this.usersService.createProfile(dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('profile/:id')
  async findProfile(@Param('id') id: string): Promise<Profile> {
    return await this.usersService.findOneProfile(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Patch('profile/:id')
  async updateProfile(@Param('id') id: string, @Body() dto: UpdateProfileDto): Promise<Profile> {
    return await this.usersService.updateProfile(+id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete('profile/:id')
  async deleteProfile(@Param('id') id: string): Promise<Profile> {
    return await this.usersService.deleteProfile(+id);
  }
  
}
