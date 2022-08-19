import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, VERSION_NEUTRAL } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { RegionType } from './entities/region.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@common/guards/jwt-auth.guard';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

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

  
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.regionsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('parent/:id')
  async findByParentId(@Param('id') id: string) {
    return await this.regionsService.findRegionsByParrentId(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('order-region/:order')
  async findByRegionOrder(@Param('order') order: string) {
    return await this.regionsService.findByOrderRegion(+order);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return await this.regionsService.update(+id, updateRegionDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.regionsService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post('address')
  async createAddress(@Param('regionId') regionId: string, @Body() createAddressDto: CreateAddressDto) {
    return await this.regionsService.createAddress(createAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('address/:id')
  async findAddress(@Param('id') id: string) {
    return await this.regionsService.findAddress(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Patch('address/:id')
  async updateAddress(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return await this.regionsService.updateAddress(+id, updateAddressDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Delete('address/:id')
  async removeAddress(@Param('id') id: string) {
    return await this.regionsService.removeAddress(+id);
  }


}
