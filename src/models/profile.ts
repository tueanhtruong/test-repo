import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Account } from "./account";
import { District } from "./district";
import { Gender } from "./gender";
import { Province } from "./province";
import { TripProfile } from "./trip_profile";
import { VaccineRegistry } from "./vaccine_registry";
import { Ward } from "./ward";

@Entity("profile")
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("character varying", {
    name: "first_name",
    length: 50,
    unique: false,
    nullable: false,
  })
  firstName!: string;

  @Column("character varying", {
    name: "last_name",
    length: 50,
    unique: false,
    nullable: false,
  })
  lastName!: string;

  @Column("character varying", {
    name: "phone_number",
    length: 50,
    unique: false,
    nullable: true,
  })
  phone!: string;

  @Column("character varying", {
    name: "email",
    length: 50,
    unique: true,
    nullable: true,
  })
  email!: string;

  @Column("date", {
    name: "date_of_birth",
    unique: false,
    nullable: true,
  })
  dateOfBirth!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @Column("character varying", {
    name: "medical_number",
    length: 50,
    unique: false,
    nullable: true,
  })
  medicalNumber!: string;

  @Column("character varying", {
    name: "medical_url",
    length: 250,
    unique: false,
    nullable: true,
  })
  medicalUrl!: string;

  @Column("character varying", {
    name: "identity_number",
    length: 50,
    unique: false,
    nullable: true,
  })
  identityNumber!: string;

  @Column("character varying", {
    name: "identity_url",
    length: 250,
    unique: false,
    nullable: true,
  })
  identityUrl!: string;

  @Column("character varying", {
    name: "address",
    length: 250,
    unique: false,
    nullable: true,
  })
  address!: string;

  @Column("character varying", {
    name: "job",
    length: 50,
    unique: false,
    nullable: true,
  })
  job!: string;

  ///////////////////////////////////////////////////////////////////

  @ManyToOne(() => Province, (province) => province.profile, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "province_id", referencedColumnName: "id" }])
  province!: Province;

  @Column("integer", { name: "province_id", nullable: true })
  provinceId!: number;

  ///////////////////////////////////////////////////////////////////

  @ManyToOne(() => District, (district) => district.profile, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "district_id", referencedColumnName: "id" }])
  district!: District;

  @Column("integer", { name: "district_id", nullable: true })
  districtId!: number;

  ///////////////////////////////////////////////////////////////////

  @ManyToOne(() => Ward, (ward) => ward.profile, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "ward_id", referencedColumnName: "id" }])
  ward!: Ward;

  @Column("integer", { name: "ward_id", nullable: true })
  wardId!: number;

  ///////////////////////////////////////////////////////////////////
  @Column("boolean", {
    name: "is_primary",
    nullable: true,
  })
  isPrimary!: boolean;

  @Column("uuid", {
    name: "primary_profile_id",
    unique: false,
    nullable: true,
  })
  primaryProfileId!: string | null;

  @OneToOne(() => Account, (account) => account.profile, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  account!: Account;

  @OneToOne(() => VaccineRegistry, (vaccine) => vaccine.profile, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "vaccine_registry_id", referencedColumnName: "id" }])
  vaccineRegistry!: VaccineRegistry;

  @Column("uuid", {
    name: "vaccine_registry_id",
    unique: false,
    nullable: true,
  })
  vaccineRegistryId!: string | null;

  /////////////////////////////////////////////////////////////////////

  @OneToMany(() => TripProfile, (tripProfile) => tripProfile.profile)
  tripProfile!: TripProfile[];

  ///////////////////////////////////////////////////////////////////

  @ManyToOne(() => Gender, (gender) => gender.profile, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "gender_id", referencedColumnName: "id" }])
  gender!: Gender;

  @Column("integer", { name: "gender_id", nullable: true })
  genderId!: number;
}
