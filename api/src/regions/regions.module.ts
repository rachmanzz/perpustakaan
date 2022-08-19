import { Module } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { DatabaseModule } from '../database.module';
import { regionProviders } from './region.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [RegionsController],
  providers: [ ...regionProviders,RegionsService],
  exports: [ RegionsService ]
})
export class RegionsModule {}
