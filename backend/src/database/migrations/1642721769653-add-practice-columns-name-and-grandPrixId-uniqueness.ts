import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPracticeColumnsNameAndGrandPrixIdUniqueness1642721769653
  implements MigrationInterface
{
  name = 'addPracticeColumnsNameAndGrandPrixIdUniqueness1642721769653';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "practice" ADD CONSTRAINT "UQ_name_grandPrixId" UNIQUE ("name", "grandPrixId")'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "practice" DROP CONSTRAINT "UQ_name_grandPrixId"'
    );
  }
}
