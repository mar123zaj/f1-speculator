import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRaceTableWithO2oRelationToGrandPrix1642836935592
  implements MigrationInterface
{
  name = 'addRaceTableWithO2oRelationToGrandPrix1642836935592';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "race" ("id" SERIAL NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_a3068b184130d87a20e516045bb" PRIMARY KEY ("id"))'
    );
    await queryRunner.query('ALTER TABLE "grand_prix" ADD "raceId" integer');
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "UQ_0cbc6b637b07f0abbfcbc9d2a4a" UNIQUE ("raceId")'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" ADD CONSTRAINT "FK_0cbc6b637b07f0abbfcbc9d2a4a" FOREIGN KEY ("raceId") REFERENCES "race"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "FK_0cbc6b637b07f0abbfcbc9d2a4a"'
    );
    await queryRunner.query(
      'ALTER TABLE "grand_prix" DROP CONSTRAINT "UQ_0cbc6b637b07f0abbfcbc9d2a4a"'
    );
    await queryRunner.query('ALTER TABLE "grand_prix" DROP COLUMN "raceId"');
    await queryRunner.query('DROP TABLE "race"');
  }
}
