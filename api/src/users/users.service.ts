import { Inject, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserType } from './entities/user.entity';
import { Card } from './entities/card.entity';
import { Profile } from './entities/profile.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { RegionsService } from '@apps/regions/regions.service';
import { CreateProfileAndAddressDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: Repository<User>,
    @Inject('CARD_REPOSITORY') private readonly cardRepository: Repository<Card>,
    @Inject('PROFILE_REPOSITORY') private readonly profileRepository: Repository<Profile>,
    private readonly regionService: RegionsService
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

  // card data need by user profile
  async findCard(cardName: string): Promise<Card[]> {
    return await this.cardRepository.find({where: { card_name: ILike(cardName) }})
  }
  async findOneCard(cardId: number): Promise<Card> {
    return await this.cardRepository.findOne({where: { id: cardId }})
  }

  async createCard(dto: CreateCardDto): Promise<Card> {
    const card = this.cardRepository.create(dto)
    return await this.cardRepository.save(card)
  }

  async updateCard(cardId: number, dto: UpdateCardDto): Promise<Card> {
    await this.cardRepository.update(cardId, dto)
    return await this.cardRepository.findOne({where: { id: cardId }})
  }

  async deleteCard(cardId: number): Promise<Card> {
    const card = await this.cardRepository.findOne({where: { id: cardId }})
    await this.cardRepository.delete(cardId)
    return card
  }

  async createProfile(dto: CreateProfileAndAddressDto): Promise<Profile> {
    const {name, type, postal_code, region_id,...profileDto} = dto
    const profile = await this.profileRepository.save({...profileDto})
    await this.regionService.createAddress({name, type, postal_code, region_id, profile_id: profile.id})
    return await this.profileRepository.findOne({where: { id: profile.id }, relations: ['address']})
  }

  async findOneProfile(profileId: number): Promise<Profile> {
    return await this.profileRepository.findOne({where: { id: profileId }, relations: ['address']})
  }

  async updateProfile(profileId: number, dto: UpdateProfileDto): Promise<Profile> {
    await this.profileRepository.update(profileId, dto)
    return await this.profileRepository.findOne({where: { id: profileId }})
  }

  async deleteProfile(profileId: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({where: { id: profileId }})
    await this.profileRepository.delete(profileId)
    return profile
  }


}
