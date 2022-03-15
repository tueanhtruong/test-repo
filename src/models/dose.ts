import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { VaccineRegistry } from "./vaccine_registry";

@Entity("dose")
export class Dose {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("date", { name: "dose_date", nullable: true })
  doseDate!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @Column("character varying", { name: "health_facility", length: 50 })
  healthFacility!: string;

  @Column("int", { name: "nth_dose" })
  nthDose!: number;

  @ManyToOne(() => VaccineRegistry, (vaccine) => vaccine.dose, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "vaccine_registry_id", referencedColumnName: "id" }])
  vaccineRegistry!: VaccineRegistry;

  @Column("uuid", { name: "vaccine_registry_id", nullable: false })
  vaccineRegistryId!: string;
}
