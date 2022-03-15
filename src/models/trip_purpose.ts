import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from ".";

@Entity("trip_purposes")
export class TripPurposes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("character varying", {
    name: "name",
    length: 250,
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

  @OneToMany(() => Trip, (trip) => trip.tripPurpose)
  trip!: Trip[];
}
