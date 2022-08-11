import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

let dataSource: DataSource;
const BUILD_PLATFORM = configService.get("BUILD_PLATFORM", null);
if (BUILD_PLATFORM === "heroku") {
    dataSource = new DataSource({
        type: "postgres",
        url: configService.get("DATABASE_URL"),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        extra: {
        charset: 'utf8mb4_unicode_ci',
        },
        synchronize: false,
        logging: false
    });
}

dataSource = new DataSource(
    {
        migrationsTableName: "migrations",
        type: "postgres",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT", 5432),
        username: configService.get("DB_USERNAME"),
        database: configService.get("DB_NAME"),
        password: configService.get("DB_PASSWORD"),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        extra: {
        charset: 'utf8mb4_unicode_ci',
        },
        synchronize: false,
        logging: false

    }
);

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => dataSource.initialize(),
    }
];

export default dataSource;