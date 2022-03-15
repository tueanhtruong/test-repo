import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Permission } from ".";
import { Account } from "./account";

@Entity("role")
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("character varying", {
    name: "key",
    length: 50,
    unique: true,
    nullable: false,
  })
  key!: string;

  @Column("character varying", {
    name: "name",
    length: 50,
    unique: true,
    nullable: false,
  })
  name!: string;

  @OneToMany(() => Account, (account) => account.role)
  account!: Account[];

  @ManyToMany(() => Permission, (permission) => permission.role, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinTable()
  permission!: Permission[];
}
