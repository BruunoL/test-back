import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNfts1634316023814 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nfts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "qtd_nfts",
            type: "smallint",
          },
          {
            name: "asset_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKAssetId",
            referencedTableName: "assets",
            referencedColumnNames: ["id"],
            columnNames: ["asset_id"],
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nfts");
  }
}
