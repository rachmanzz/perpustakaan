import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseEntity1660573140569 implements MigrationInterface {
    name = 'BaseEntity1660573140569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "card_name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" BIGSERIAL NOT NULL, "name" character varying NOT NULL, "username" character varying, "email" character varying NOT NULL, "password" character varying, "email_verified" boolean NOT NULL, "verified" boolean NOT NULL, "user_type" character varying NOT NULL DEFAULT 'visitor', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("id" BIGSERIAL NOT NULL, "nickname" character varying, "phone" character varying, "place_of_birth" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "id_card" character varying NOT NULL, "lifetime" boolean NOT NULL DEFAULT true, "expired_card" TIMESTAMP, "address" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" bigint, "cardId" integer, "regionId" integer, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "region" ("id" SERIAL NOT NULL, "code" character varying NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'village', "region_order" integer NOT NULL, "parentId" integer, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_a24972ebd73b106250713dcddd9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_93d081d11023eae8f54ab4f1a07" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "profile" ADD CONSTRAINT "FK_7e4773dad236baf15d48bc3fe55" FOREIGN KEY ("regionId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "region" ADD CONSTRAINT "FK_ed0c8098ce6809925a437f42aec" FOREIGN KEY ("parentId") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "region" DROP CONSTRAINT "FK_ed0c8098ce6809925a437f42aec"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_7e4773dad236baf15d48bc3fe55"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_93d081d11023eae8f54ab4f1a07"`);
        await queryRunner.query(`ALTER TABLE "profile" DROP CONSTRAINT "FK_a24972ebd73b106250713dcddd9"`);
        await queryRunner.query(`DROP TABLE "region"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
