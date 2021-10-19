import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAsset1634315930224 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "assets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "image_url",
            type: "varchar"
          },
          {
            name: "token_ipfs",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("assets");
  }
}
