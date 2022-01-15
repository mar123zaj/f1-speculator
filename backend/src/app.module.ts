import { AuthModule } from '@auth/auth.module';
import typeormConfig from '@config/typeorm.config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...typeormConfig, autoLoadEntities: true }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    AuthModule,
  ],
})
export class AppModule {}
