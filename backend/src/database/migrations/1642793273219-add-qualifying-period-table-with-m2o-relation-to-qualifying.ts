import { MigrationInterface, QueryRunner } from 'typeorm';

export class addQualifyingPeriodTableWithM2oRelationToQualifying1642793273219
  implements MigrationInterface
{
  name = 'addQualifyingPeriodTableWithM2oRelationToQualifying1642793273219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line @typescript-eslint/quotes
      "CREATE TYPE \"public\".\"qualifying_period_name_enum\" AS ENUM('Qualifying 1', 'Qualifying 2', 'Qualifying 3')"
    );
    await queryRunner.query(
      'CREATE TABLE "qualifying_period" ("id" SERIAL NOT NULL, "name" "public"."qualifying_period_name_enum" NOT NULL, "qualifyingId" integer, CONSTRAINT "UQ_name_qualifyingId" UNIQUE ("name", "qualifyingId"), CONSTRAINT "PK_2639ba34cb1ac8e6becd11fe290" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "qualifying_period" ADD CONSTRAINT "FK_0b16f9d5ab098719d5b64725428" FOREIGN KEY ("qualifyingId") REFERENCES "qualifying"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "qualifying_period" DROP CONSTRAINT "FK_0b16f9d5ab098719d5b64725428"'
    );
    await queryRunner.query('DROP TABLE "qualifying_period"');
    await queryRunner.query('DROP TYPE "public"."qualifying_period_name_enum"');
  }
}
