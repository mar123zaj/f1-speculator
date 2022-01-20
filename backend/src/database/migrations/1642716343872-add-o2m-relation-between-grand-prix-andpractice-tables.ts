import { MigrationInterface, QueryRunner } from 'typeorm';

export class addO2mRelationBetweenGrandPrixAndpracticeTables1642716343872
  implements MigrationInterface
{
  name = 'addO2mRelationBetweenGrandPrixAndpracticeTables1642716343872';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "practice" ADD "grandPrixId" integer');
    await queryRunner.query(
      'ALTER TABLE "practice" ADD CONSTRAINT "FK_a163f34f8a110ac8fb4c3fa550a" FOREIGN KEY ("grandPrixId") REFERENCES "grand_prix"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "practice" DROP CONSTRAINT "FK_a163f34f8a110ac8fb4c3fa550a"'
    );
    await queryRunner.query('ALTER TABLE "practice" DROP COLUMN "grandPrixId"');
  }
}
