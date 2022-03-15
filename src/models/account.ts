import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Profile } from "./profile";
import { Role } from "./role";

@Entity("account")
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @Column("character varying", { name: "email", length: 50, unique: true })
  email!: string;

  @ManyToOne(() => Role, (role) => role.account, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role!: Role;

  @Column("integer", { name: "role_id", nullable: false })
  roleId!: number;

  @OneToOne(() => Profile, (profile) => profile.account, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "primary_profile_id", referencedColumnName: "id" }])
  profile!: Profile;

  @Column("uuid", { name: "primary_profile_id", unique: true, nullable: true })
  primaryProfileId!: string | null;

  @Column("boolean", { name: "is_disabled", default: false })
  isDisabled!: boolean;
}
