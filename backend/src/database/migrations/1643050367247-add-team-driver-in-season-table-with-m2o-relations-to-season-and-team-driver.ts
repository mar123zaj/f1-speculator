import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTeamDriverInSeasonTableWithM2oRelationsToSeasonAndTeamDriver1643050367247
  implements MigrationInterface
{
  name =
    'addTeamDriverInSeasonTableWithM2oRelationsToSeasonAndTeamDriver1643050367247';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "team_driver_in_season" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "seasonId" integer, "teamDriverId" integer, CONSTRAINT "PK_d581cdf20e8fbaa05f4d205b3d3" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver_in_season" ADD CONSTRAINT "FK_2ede158f967f413367b5c0aec99" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver_in_season" ADD CONSTRAINT "FK_d449649cc89d3798084aa0eeaa9" FOREIGN KEY ("teamDriverId") REFERENCES "team_driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_driver_in_season" DROP CONSTRAINT "FK_d449649cc89d3798084aa0eeaa9"'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver_in_season" DROP CONSTRAINT "FK_2ede158f967f413367b5c0aec99"'
    );
    await queryRunner.query('DROP TABLE "team_driver_in_season"');
  }
}
