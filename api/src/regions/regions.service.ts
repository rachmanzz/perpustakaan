import { Inject, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Address } from './entities/address.entity';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionsService {
  constructor(
    @Inject("REGION_REPOSITORY") private readonly regionRepository: Repository<Region>,
    @Inject("ADDRESS_REPOSITORY") private readonly addressRepository: Repository<Address>
  ) {}
  async create(dto: CreateRegionDto, order: number): Promise<Region> {
    if (dto.parent_id) {
      const {parent_id, ...props} = dto
      return await this.regionRepository.save({...props, region_order: order, parent: { id: parent_id }})
    }
    return await this.regionRepository.save({...dto, region_order: order})
  }

  async findOne(id: number) {
    return await this.regionRepository.findOne({where: {id}})
  }

  async findByOrderRegion(order: number) {
    return await this.regionRepository.findOne({where: {region_order: order}})
  }

  async findRegionsByParrentId(parent_id: number, whereName?: string) {
    let where = {parent: {id: parent_id}} as {[key: string]: any}
    if (whereName) where.name = ILike(`%${whereName}%`)
    return await this.regionRepository.find({where})
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    await this.regionRepository.update(id, {...updateRegionDto})
    return this.findOne(id)
  }

  async remove(id: number) {
    return await this.regionRepository.delete(id)
  }


  async createAddress(dto: CreateAddressDto) {
    const {region_id, profile_id, ...props} = dto
    const region = await this.findOne(region_id)
    if (!region) throw new Error('Region not found')
    if (region.region_order !== 4) throw new Error('Address can be created only for village')
    if (!profile_id) throw new Error('Profile is required')
    return await this.addressRepository.save({...props, region, profile: {id: profile_id}})
  }

  async findAddress(id: number) {
    return await this.addressRepository.findOne({where: {id}})
  }

  async findAddresses(profile_id: number) {
    return await this.addressRepository.find({where: {profile: {id: profile_id}}})
  }

  async updateAddress(id: number, updateAddressDto: UpdateAddressDto) {
    await this.addressRepository.update(id, {...updateAddressDto})
    return this.findAddress(id)
  }

  async removeAddress(id: number) {
    const address = await this.findAddress(id)
    if (!address) throw new Error('Address not found')
    await this.addressRepository.delete(id)
    return address
  }


}
