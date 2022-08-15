import { Test, TestingModule } from '@nestjs/testing';
import { CreateRegionDto } from './dto/create-region.dto';
import { RegionType } from './entities/region.entity';
import { regionProviders } from './region.providers.mock';
import { RegionsService } from './regions.service';

describe('RegionsService', () => {
  let service: RegionsService;

  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionsService, ...regionProviders],
    }).compile();

    service = module.get<RegionsService>(RegionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a region', async () => {
    const dto: CreateRegionDto = {
      name: 'Test Region',
      region_order: 0,
      code: '1000000',
      type: RegionType.COUNTRY
    }
    const region = await service.create(dto)
    expect(typeof region.id).toBe("number")
    expect(region.name).toBe('Test Region')
    expect(region.region_order).toBe(0)
  })
});
