import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TripProfile } from "./trip_profile";

@Entity("item_status")
export class ItemStatus {
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

  @OneToMany(
    () => TripProfile,
    (tripProfile) =>
      tripProfile.testCovidStatus ||
      tripProfile.vaccineStatus ||
      tripProfile.checkInsStatus
  )
  tripProfile!: TripProfile[];
}
