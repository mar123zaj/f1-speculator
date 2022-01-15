import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDriverTable1642255890896 implements MigrationInterface {
  name = 'addDriverTable1642255890896';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "driver" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "secondName" character varying, "surname" character varying NOT NULL, "birthDate" date NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "driver"');
  }
}
