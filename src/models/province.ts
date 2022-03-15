import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from ".";
import { District } from "./district";
import { Profile } from "./profile";
import { Ward } from "./ward";

@Entity("province")
export class Province {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("character varying", { name: "name", length: 50 })
  name!: string;

  @OneToMany(() => District, (district) => district.province)
  district!: District[];

  @OneToMany(() => Ward, (ward) => ward.province)
  ward!: Ward[];

  @OneToMany(() => Profile, (profile) => profile.province)
  profile!: Profile[];

  @OneToMany(() => Trip, (trip) => trip.departureProvince)
  departureTrip!: Trip[];

  @OneToMany(() => Trip, (trip) => trip.destinationProvince)
  destinationTrip!: Trip[];
}
