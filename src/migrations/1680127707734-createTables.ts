import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1680127707734 implements MigrationInterface {
    name = 'createTables1680127707734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profileImage" SET DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJGlDRZM5zsQv-p66Q6MYlWMqYgokxPNLOw&usqp=CAU'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profileImage" SET DEFAULT ''`);
    }

}
