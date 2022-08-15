import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import RepositoryMock from '../test-utils/repository-mock.utils';
import { CreateRegionDto } from './dto/create-region.dto';
import { Region, RegionType } from './entities/region.entity';
import { RegionsService } from './regions.service';

describe('RegionsService', () => {
  let service: RegionsService;

  // const mockedRegionRepository1 = {
  //   // id random number between 1 and 100
  //   save : jest.fn((dto: CreateRegionDto) => {
  //     if (dto.parentId) {
  //       const {parentId, regionOrder, ...props} = dto
  //       return Promise.resolve({
  //         id: Math.floor(Math.random() * 100) + 1,
  //         ...props,
  //         region_order: regionOrder,
  //         parent: { id: parentId }
  //       })
  //     }
  //     const {regionOrder, ...props} = dto
  //     return Promise.resolve({
  //       id: Math.floor(Math.random() * 100) + 1,
  //       region_order: regionOrder,
  //       ...props,
  //       parent: null
  //     })
  //   })
  // }

  const mockedRegionRepository = RepositoryMock({saveResolve: (dto: CreateRegionDto) => {
    if (dto.parentId) {
      const {parentId, regionOrder, ...props} = dto
      return {
        id: Math.floor(Math.random() * 100) + 1,
        ...props,
        region_order: regionOrder,
        parent: { id: parentId }
      }
    }
    const {regionOrder, ...props} = dto
    return {
      id: Math.floor(Math.random() * 100) + 1,
      region_order: regionOrder,
      ...props,
      parent: null
    }
  }})

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionsService, { provide: "REGION_REPOSITORY", useValue: mockedRegionRepository }],
    }).compile();

    service = module.get<RegionsService>(RegionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a region', async () => {
    const dto: CreateRegionDto = {
      name: 'Test Region',
      regionOrder: 0,
      code: '1000000',
      type: RegionType.COUNTRY
    }
    const region = await service.create(dto)
    expect(typeof region.id).toBe("number")
    expect(region.name).toBe('Test Region')
    expect(region.region_order).toBe(0)
    expect(region.parent).toBeNull()
  })
});
