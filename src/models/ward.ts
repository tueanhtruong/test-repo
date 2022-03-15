import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Trip } from ".";
import { District } from "./district";
import { Profile } from "./profile";
import { Province } from "./province";

@Entity("ward")
export class Ward {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, type: "varchar" })
  name!: string;

  @ManyToOne(() => Province, (province) => province.district, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "province_id", referencedColumnName: "id" }])
  province!: Province;

  @Column("integer", { name: "province_id", nullable: false })
  provinceId!: number;

  @ManyToOne(() => District, (district) => district.ward, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "district_id", referencedColumnName: "id" }])
  district!: District;

  @Column("integer", { name: "district_id", nullable: false })
  districtId!: number;

  @OneToMany(() => Profile, (profile) => profile.ward)
  profile!: Profile[];

  @OneToMany(() => Trip, (trip) => trip.departureWard)
  departureTrip!: Trip[];

  @OneToMany(() => Trip, (trip) => trip.destinationWard)
  destinationTrip!: Trip[];
}
