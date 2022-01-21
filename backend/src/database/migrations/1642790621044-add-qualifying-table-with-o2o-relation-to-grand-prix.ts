import { MigrationInterface, QueryRunner } from 'typeorm';

export class addQualifyingTableWithO2oRelationToGrandPrix1642790621044
  implements MigrationInterface
{
  name = 'addQualifyingTableWithO2oRelationToGrandPrix1642790621044';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "qualifying" ("id" SERIAL NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_73b0c073f8b69bcb4aa6aecb3f7" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD "qualifyingId" integer'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "UQ_56e399d52e589477406e23691cc" UNIQUE ("qualifyingId")'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "FK_56e399d52e589477406e23691cc" FOREIGN KEY ("qualifyingId") REFERENCES "qualifying"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "FK_56e399d52e589477406e23691cc"'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "UQ_56e399d52e589477406e23691cc"'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP COLUMN "qualifyingId"'
    );
    await queryRunner.query('DROP TABLE "qualifying"');
  }
}
