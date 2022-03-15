import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Trip } from ".";
import { Profile } from "./profile";
import { Province } from "./province";
import { Ward } from "./ward";

@Entity("district")
export class District {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("character varying", { name: "name", length: 50 })
  name!: string;

  @ManyToOne(() => Province, (province) => province.district, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "province_id", referencedColumnName: "id" }])
  province!: Province;

  @Column("integer", { name: "province_id", nullable: false })
  provinceId!: number;

  @OneToMany(() => Ward, (ward) => ward.district)
  ward!: Ward[];

  @OneToMany(() => Profile, (profile) => profile.district)
  profile!: Profile[];

  @OneToMany(() => Trip, (trip) => trip.departureDistrict)
  departureTrip!: Trip[];

  @OneToMany(() => Trip, (trip) => trip.destinationDistrict)
  destinationTrip!: Trip[];
}
