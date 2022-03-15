import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("application_configs")
export class ApplicationConfigs {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("character varying", {
    name: "name",
    length: 50,
    unique: true,
    nullable: false,
  })
  name!: string;

  @Column("character varying", {
    name: "key",
    length: 50,
    unique: true,
    nullable: false,
  })
  key!: string;

  @Column("boolean", { name: "is_enable", unique: false, nullable: false })
  isEnable!: boolean;
}
