import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Trip } from ".";
import { Account } from "./account";

@Entity("vehicle_type")
export class VehicleType {
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

  @OneToMany(() => Trip, (trip) => trip.vehicleType)
  trip!: Trip[];
}
