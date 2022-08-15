import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database.module';
import { regionProviders } from './region.providers';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';

describe('RegionsController', () => {
  let controller: RegionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegionsController],
      providers: [RegionsService, {
        provide: "REGION_REPOSITORY",
        useValue: {}
      }],
    }).compile();

    controller = module.get<RegionsController>(RegionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
