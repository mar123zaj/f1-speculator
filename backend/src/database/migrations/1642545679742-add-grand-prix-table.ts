import { MigrationInterface, QueryRunner } from 'typeorm';

export class addGrandPrixTable1642545679742 implements MigrationInterface {
  name = 'addGrandPrixTable1642545679742';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "grand_prix" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "date" daterange NOT NULL, CONSTRAINT "PK_0d1659547bad79a0bc84ce04620" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "grand_prix"');
  }
}
