import { MigrationInterface, QueryRunner } from 'typeorm';

export class addCircuitTableWithM2oRelationToGrandPrix1642851347405
  implements MigrationInterface
{
  name = 'addCircuitTableWithM2oRelationToGrandPrix1642851347405';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "circuit" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "length" integer NOT NULL, "turns" integer NOT NULL, "grandPrixId" integer, CONSTRAINT "PK_16d20c94e486b3613872aa43cad" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "circuit" ADD CONSTRAINT "FK_4f26d7cc67a9c815ce82db863ee" FOREIGN KEY ("grandPrixId") REFERENCES "grand_prix"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "circuit" DROP CONSTRAINT "FK_4f26d7cc67a9c815ce82db863ee"'
    );
    await queryRunner.query('DROP TABLE "circuit"');
  }
}
