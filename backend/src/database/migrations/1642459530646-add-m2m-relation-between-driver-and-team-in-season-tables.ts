import { MigrationInterface, QueryRunner } from 'typeorm';

export class addM2mRelationBetweenDriverAndTeamInSeasonTables1642459530646
  implements MigrationInterface
{
  name = 'addM2mRelationBetweenDriverAndTeamInSeasonTables1642459530646';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "team_in_season_drivers_driver" ("teamInSeasonId" integer NOT NULL, "driverId" integer NOT NULL, CONSTRAINT "PK_3ed63ec16296756849a31c2996e" PRIMARY KEY ("teamInSeasonId", "driverId"))'
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_3a71247713e8f73697a4b3b3df" ON "team_in_season_drivers_driver" ("teamInSeasonId") '
    );
    await queryRunner.query(
      'CREATE INDEX "IDX_054a63ba87e41af4a65962f11c" ON "team_in_season_drivers_driver" ("driverId") '
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season_drivers_driver" ADD CONSTRAINT "FK_3a71247713e8f73697a4b3b3dff" FOREIGN KEY ("teamInSeasonId") REFERENCES "team_in_season"("id") ON DELETE CASCADE ON UPDATE CASCADE'
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season_drivers_driver" ADD CONSTRAINT "FK_054a63ba87e41af4a65962f11cb" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_in_season_drivers_driver" DROP CONSTRAINT "FK_054a63ba87e41af4a65962f11cb"'
    );
    await queryRunner.query(
      'ALTER TABLE "team_in_season_drivers_driver" DROP CONSTRAINT "FK_3a71247713e8f73697a4b3b3dff"'
    );
    await queryRunner.query(
      'DROP INDEX "public"."IDX_054a63ba87e41af4a65962f11c"'
    );
    await queryRunner.query(
      'DROP INDEX "public"."IDX_3a71247713e8f73697a4b3b3df"'
    );
    await queryRunner.query('DROP TABLE "team_in_season_drivers_driver"');
  }
}
