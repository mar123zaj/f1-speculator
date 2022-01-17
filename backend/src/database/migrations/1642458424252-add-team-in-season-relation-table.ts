import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTeamInSeasonRelationTable1642458424252
  implements MigrationInterface
{
  name = 'addTeamInSeasonRelationTable1642458424252';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "team_in_season" ("id" SERIAL NOT NULL, "teamId" integer, "seasonId" integer, CONSTRAINT "UQ_teamId_seasonId" UNIQUE ("teamId", "seasonId"), CONSTRAINT "PK_40922b5977a12ed767ac4836df4" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season" ADD CONSTRAINT "FK_bc30e61c1efa975ae13f670fbbb" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season" ADD CONSTRAINT "FK_8f268ed8f2db74dd3cafc6010d5" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_in_season" DROP CONSTRAINT "FK_8f268ed8f2db74dd3cafc6010d5"'
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season" DROP CONSTRAINT "FK_bc30e61c1efa975ae13f670fbbb"'
    );
    await queryRunner.query('DROP TABLE "team_in_season"');
  }
}
