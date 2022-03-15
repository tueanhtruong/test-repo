import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { VaccineRegistry } from "./vaccine_registry";

@Entity("vaccine_type")
export class VaccineType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("character varying", { name: "name", length: 50 })
  name!: string;

  @Column("character varying", { name: "key", length: 50 })
  key!: string;

  @Column("int", { name: "number_of_dose" })
  numberOfDose!: number;

  @OneToMany(() => VaccineRegistry, (vaccine) => vaccine.vaccineType)
  vaccineRegistry!: VaccineRegistry[];
}
