import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Profile } from ".";

@Entity("gender")
export class Gender {
  @PrimaryGeneratedColumn()
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

  @OneToMany(() => Profile, (profile) => profile.gender)
  profile!: Profile[];
}
