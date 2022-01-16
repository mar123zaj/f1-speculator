import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTeamDriverRelationTableAdditionalUniqueness1642374121703
  implements MigrationInterface
{
  name = 'addTeamDriverRelationTableAdditionalUniqueness1642374121703';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_driver" ADD CONSTRAINT "UQ_teamId_driverId" UNIQUE ("teamId", "driverId")'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_driver" DROP CONSTRAINT "UQ_teamId_driverId"'
    );
  }
}
