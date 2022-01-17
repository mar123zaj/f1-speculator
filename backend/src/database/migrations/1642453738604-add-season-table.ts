import { MigrationInterface, QueryRunner } from 'typeorm';

export class addSeasonTable1642453738604 implements MigrationInterface {
  name = 'addSeasonTable1642453738604';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "season" ("id" SERIAL NOT NULL, "year" integer NOT NULL, CONSTRAINT "UQ_year" UNIQUE ("year"), CONSTRAINT "PK_8ac0d081dbdb7ab02d166bcda9f" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "season"');
  }
}
