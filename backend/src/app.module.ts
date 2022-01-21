import { AuthModule } from '@auth/auth.module';
import typeormConfig from '@config/typeorm.config';
import { TeamModule } from '@team/team.module';
import { DriverModule } from '@driver/driver.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrandPrixModule } from './grand-prix/grand-prix.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...typeormConfig, autoLoadEntities: true }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    AuthModule,
    DriverModule,
    TeamModule,
    GrandPrixModule,
  ],
})
export class AppModule {}
