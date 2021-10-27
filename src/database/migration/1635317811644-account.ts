import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class account1635317811644 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "account",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        isNullable: false,
                        type: "varchar(50)",
                    },
                    {
                        name: "cpf",
                        type: "varchar(12)",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "phone",
                        type: "varchar(15)",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "adress",
                        type: "varchar(30)",
                        isNullable: false,
                    },
                    {
                        name: "status",
                        type: "varchar(15)",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "disabled_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account");
    }

}
