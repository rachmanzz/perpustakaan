import { DataSource } from 'typeorm';
import { Region } from './entities/region.entity';

export const regionProviders = [
    {
        provide: 'REGION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Region),
        inject: ['DATA_SOURCE']
    }
];