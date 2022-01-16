import { MigrationInterface, QueryRunner } from 'typeorm';

export class addConstructorTable1642350786430 implements MigrationInterface {
  name = 'addConstructorTable1642350786430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "constructor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "PK_4b7cb9ed6ddd155297d4b048eb2" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "constructor"');
  }
}
