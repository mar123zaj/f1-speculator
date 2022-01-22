import { MigrationInterface, QueryRunner } from 'typeorm';

export class addSprintTableWithO2oRelationToGrandPrix1642852126126
  implements MigrationInterface
{
  name = 'addSprintTableWithO2oRelationToGrandPrix1642852126126';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "sprint" ("id" SERIAL NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_f371c7b5c4bc62fb2ba2bdb9f61" PRIMARY KEY ("id"))'
    );
    await queryRunner.query('ALTER TABLE "grand_prix" ADD "sprintId" integer');
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "UQ_06d9ee91108c2208c634747d907" UNIQUE ("sprintId")'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "FK_06d9ee91108c2208c634747d907" FOREIGN KEY ("sprintId") REFERENCES "sprint"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "FK_06d9ee91108c2208c634747d907"'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "UQ_06d9ee91108c2208c634747d907"'
    );
    await queryRunner.query('ALTER TABLE "grand_prix" DROP COLUMN "sprintId"');
    await queryRunner.query('DROP TABLE "sprint"');
  }
}
