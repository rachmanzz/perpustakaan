import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, VERSION_NEUTRAL } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionType } from './entities/region.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';

function regionOrderRules(dto: CreateRegionDto) {
  if (dto.type === RegionType.COUNTRY) {
    if (typeof dto.parent_id !== 'undefined') throw new ReferenceError('Parent id shouldn`t to set')
    return 0;
  }
  if (typeof dto.parent_id === 'undefined') throw new ReferenceError('Parent id should to set')
  switch(dto.type) {
    case RegionType.PROVINCE:
      return 1;
    case RegionType.CITY:
      return 2;
    case RegionType.DISTRICT:
      return 2;
    case RegionType.SUB_DISTRICT:
      return 3;
    case RegionType.VILLAGE:
      return 4;
    case RegionType.URBAN_VILLAGE:
      return 4;
  }
}

@Controller({path: 'regions', version: VERSION_NEUTRAL})
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    const order = regionOrderRules(createRegionDto)
    return this.regionsService.create(createRegionDto, order);
  }

  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(+id, updateRegionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(+id);
  }
}
