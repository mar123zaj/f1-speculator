import { MigrationInterface, QueryRunner } from 'typeorm';

export class changeCircuitToGrandPrixRelation0fromM2oToO2m1642856525113
  implements MigrationInterface
{
  name = 'changeCircuitToGrandPrixRelationFromM2oToO2m1642856525113';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "circuit" DROP CONSTRAINT "FK_4f26d7cc67a9c815ce82db863ee"'
    );
    await queryRunner.query('ALTER TABLE "circuit" DROP COLUMN "grandPrixId"');
    await queryRunner.query('ALTER TABLE "grand_prix" ADD "circuitId" integer');
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "FK_f940a1ae32d00e9d90883805333" FOREIGN KEY ("circuitId") REFERENCES "circuit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "FK_f940a1ae32d00e9d90883805333"'
    );
    await queryRunner.query('ALTER TABLE "grand_prix" DROP COLUMN "circuitId"');
    await queryRunner.query('ALTER TABLE "circuit" ADD "grandPrixId" integer');
    await queryRunner.query(
      'ALTER TABLE "circuit" ADD CONSTRAINT "FK_4f26d7cc67a9c815ce82db863ee" FOREIGN KEY ("grandPrixId") REFERENCES "grand_prix"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }
}
