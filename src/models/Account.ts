import { Column, Entity } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("account")
export class Account {
  @Column("uuid", { primary: true, name: "id", unique: true })
  id: NonNullable<unknown>;

  @Column("varchar", { name: "nome", length: 50 })
  nome: string;

  @Column("varchar", { name: "cpf", length: 12, unique: true })
  cpf: string;

  @Column("varchar", { name: "phone", length: 15, unique: true })
  phone: string;

  @Column("varchar", { name: "adress", length: 30 })
  adress: string;

  @Column("varchar", { name: "status", length: 15 })
  status: string;

  @Column("timestamp", { name: "created_at", default: () => "now()" })
  createdAt: NonNullable<unknown>;

  @Column("datetime", { name: "disabled_at", nullable: true })
  disabledAt: Date | null;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
