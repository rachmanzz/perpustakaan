import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';
import { Region } from './entities/region.entity';

export const regionProviders = [
    {
        provide: 'REGION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Region),
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'ADDRESS_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Address),
        inject: ['DATA_SOURCE']
    }
];