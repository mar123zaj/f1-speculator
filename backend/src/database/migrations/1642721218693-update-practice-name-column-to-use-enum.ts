import { MigrationInterface, QueryRunner } from 'typeorm';

export class updatePracticeNameColumnToUseEnum1642721218693
  implements MigrationInterface
{
  name = 'updatePracticeNameColumnToUseEnum1642721218693';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "practice" DROP COLUMN "name"');
    await queryRunner.query(
      // eslint-disable-next-line prettier/prettier
      'CREATE TYPE "public"."practice_name_enum" AS ENUM(\'Practice 1\', \'Practice 2\', \'Practice 3\')'
    );
    await queryRunner.query(
      'ALTER TABLE "practice" ADD "name" "public"."practice_name_enum" NOT NULL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "practice" DROP COLUMN "name"');
    await queryRunner.query('DROP TYPE "public"."practice_name_enum"');
    await queryRunner.query(
      'ALTER TABLE "practice" ADD "name" character varying NOT NULL'
    );
  }
}
