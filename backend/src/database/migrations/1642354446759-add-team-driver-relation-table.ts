import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTeamDriverRelationTable1642354446759
  implements MigrationInterface
{
  name = 'addTeamDriverRelationTable1642354446759';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "team_driver" ("id" SERIAL NOT NULL, "teamId" integer, "driverId" integer, CONSTRAINT "PK_4c2bba7b9071e0f14e5a7ad76c7" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver" ADD CONSTRAINT "FK_d016f33441e032b4e0b4b144bbf" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver" ADD CONSTRAINT "FK_92926fb0338332f666aa76f8149" FOREIGN KEY ("driverId") REFERENCES "driver"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "team_driver" DROP CONSTRAINT "FK_92926fb0338332f666aa76f8149"'
    );
    await queryRunner.query(
      'ALTER TABLE "team_driver" DROP CONSTRAINT "FK_d016f33441e032b4e0b4b144bbf"'
    );
    await queryRunner.query('DROP TABLE "team_driver"');
  }
}
