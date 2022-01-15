import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { resolve } from 'path';
config({
  path: resolve(__dirname, '../../../envs/backend.env'),
});

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  synchronize: false,
  logging: /true/i.test(process.env.TYPEORM_LOGGING),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'database/migrations',
  },
  migrationsTableName: 'migrations',
  migrationsRun: /true/i.test(process.env.TYPEORM_MIGRATIONS_RUN),
};

export default typeormConfig;
