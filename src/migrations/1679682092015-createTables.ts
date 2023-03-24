import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1679682092015 implements MigrationInterface {
    name = 'createTables1679682092015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "profileImage" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "profileImage"`);
    }

}
