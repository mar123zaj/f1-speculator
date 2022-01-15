"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var path_1 = require("path");
(0, dotenv_1.config)({
    path: (0, path_1.resolve)(__dirname, '../../../envs/backend.env')
});
var typeormConfig = {
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
        migrationsDir: 'database/migrations'
    },
    migrationsTableName: 'migrations',
    migrationsRun: /true/i.test(process.env.TYPEORM_MIGRATIONS_RUN)
};
exports["default"] = typeormConfig;
