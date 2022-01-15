import { AuthModule } from '@auth/auth.module';
import typeormConfig from '@config/typeorm.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
console.log(__dirname)
@Module({
  imports: [
    ConfigModule.forRoot({
      
      envFilePath: [__dirname + '../envs/backend.env'],
    }),
    TypeOrmModule.forRoot({ ...typeormConfig, autoLoadEntities: true }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    AuthModule,
  ],
})
export class AppModule {}
