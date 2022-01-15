import { DriverEntity } from '@driver/driver.entity';
import { DriverRepository } from '@driver/driver.repository';
import { DriverResolver } from '@driver/driver.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  providers: [DriverResolver, DriverRepository],
})
export class DriverModule {}
