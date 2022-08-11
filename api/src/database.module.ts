import { Module } from '@nestjs/common';
import { databaseProviders } from './configs/typeorm.config';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}