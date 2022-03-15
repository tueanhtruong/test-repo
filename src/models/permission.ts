import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Role } from ".";

@Entity("permission")
export class Permission {
  @PrimaryGeneratedColumn("increment")
  id!: string;

  @Column("character varying", { name: "name", length: 100, unique: true })
  name!: string;

  @ManyToMany(() => Role, (role) => role.permission, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  role!: Role[];
}
