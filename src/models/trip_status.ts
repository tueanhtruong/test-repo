import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from ".";

@Entity("trip_status")
export class TripStatus {
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

  @OneToMany(() => Trip, (trip) => trip.tripStatus)
  trip!: Trip[];
}
