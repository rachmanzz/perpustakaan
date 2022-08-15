import dataSource from 'src/configs/typeorm.config';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE']
    }
];