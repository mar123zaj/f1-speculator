import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPracticeTable1642714283627 implements MigrationInterface {
  name = 'addPracticeTable1642714283627';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "practice" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_4d094a10eae690da34cc5b8ea32" PRIMARY KEY ("id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "practice"');
  }
}
