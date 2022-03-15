import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Profile } from ".";
import { Dose } from "./dose";
import { VaccineType } from "./vaccine_type";

@Entity("vaccine_registry")
export class VaccineRegistry {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("character varying", {
    name: "vaccine_url",
    length: 250,
    nullable: true,
  })
  vaccineUrl!: string;

  @Column("boolean", {
    name: "is_has_vaccinated",
    nullable: true,
    default: null,
  })
  isHasVaccinated!: boolean;

  @OneToMany(() => Dose, (dose) => dose.vaccineRegistry, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    nullable: true,
  })
  dose!: (Dose | null)[];

  @ManyToOne(() => VaccineType, (vaccine) => vaccine.vaccineRegistry, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "vaccine_type_id", referencedColumnName: "id" }])
  vaccineType!: VaccineType;

  @Column("integer", { name: "vaccine_type_id", nullable: true })
  vaccineTypeId!: number;

  @OneToOne(() => Profile, (profile) => profile.vaccineRegistry, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "profile_id", referencedColumnName: "id" }])
  profile!: Profile;

  @Column("uuid", { name: "profile_id", nullable: false })
  profileId!: string;
}
