import dataSource from 'src/configs/typeorm.config';
import { DataSource } from 'typeorm';
import { Card } from './entities/card.entity';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'CARD_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Card),
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'PROFILE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Profile),
        inject: ['DATA_SOURCE']
    }
];