import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDriverTable1642348730305 implements MigrationInterface {
  name = 'addDriverTable1642348730305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "constructor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "PK_4b7cb9ed6ddd155297d4b048eb2" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "driver" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "birthDate" date NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "PK_61de71a8d217d585ecd5ee3d065" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "driver"');
    await queryRunner.query('DROP TABLE "constructor"');
  }
}
