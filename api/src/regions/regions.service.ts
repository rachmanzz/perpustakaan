import { Inject, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionsService {
  constructor(
    @Inject("REGION_REPOSITORY") private readonly regionRepository: Repository<Region>,
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
}
