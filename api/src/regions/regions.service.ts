import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionsService {
  constructor(
    @Inject("REGION_REPOSITORY") private readonly regionRepository: Repository<Region>,
  ) {}
  create(createRegionDto: CreateRegionDto) {
    return 'This action adds a new region';
  }

  findAll() {
    return `This action returns all regions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} region`;
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return `This action updates a #${id} region`;
  }

  remove(id: number) {
    return `This action removes a #${id} region`;
  }
}
