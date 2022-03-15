import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { CheckIns, ItemStatus, Profile, TestCovid, Trip } from ".";

@Entity("trip_profile")
export class TripProfile {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  /////////////////////////////////////////////////////// Profile

  @ManyToOne(() => Profile, (profile) => profile.tripProfile, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "profile_id", referencedColumnName: "id" }])
  profile!: Profile;

  @Column("uuid", { name: "profile_id", nullable: false })
  profileId!: string;

  /////////////////////////////////////////////////////// CheckIns

  @OneToOne(() => CheckIns, (checkIns) => checkIns.tripProfile, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "check_ins_id", referencedColumnName: "id" }])
  checkIns!: CheckIns;

  @Column("uuid", { name: "check_ins_id", nullable: false })
  checkInsId!: string;

  /////////////////////////////////////////////////////// Covid Test
  @OneToOne(() => TestCovid, (testCovid) => testCovid.tripProfile, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "test_covid_id", referencedColumnName: "id" }])
  testCovid!: TestCovid;

  @Column("uuid", { name: "test_covid_id", nullable: false })
  testCovidId!: string;
  /////////////////////////////////////////////////////// Covid Test Status

  @ManyToOne(() => ItemStatus, (itemStatus) => itemStatus.tripProfile, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "test_covid_status_id", referencedColumnName: "id" }])
  testCovidStatus!: ItemStatus;

  @Column("int", { name: "test_covid_status_id", nullable: false, default: 1 })
  testCovidStatusId!: number;

  /////////////////////////////////////////////////////// Vaccine Status

  @ManyToOne(() => ItemStatus, (itemStatus) => itemStatus.tripProfile, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vaccine_status_id", referencedColumnName: "id" }])
  vaccineStatus!: ItemStatus;

  @Column("int", { name: "vaccine_status_id", nullable: false, default: 1 })
  vaccineStatusId!: number;

  /////////////////////////////////////////////////////// Check Ins Status

  @ManyToOne(() => ItemStatus, (itemStatus) => itemStatus.tripProfile, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "check_ins_status_id", referencedColumnName: "id" }])
  checkInsStatus!: ItemStatus;

  @Column("int", { name: "check_ins_status_id", nullable: false, default: 1 })
  checkInsStatusId!: number;

  /////////////////////////////////////////////////////// Trip

  @ManyToOne(() => Trip, (trip) => trip.tripProfile, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "trip_id", referencedColumnName: "id" }])
  trip!: Trip;

  @Column("uuid", { name: "trip_id", nullable: true })
  tripId!: string;

  /////////////////////////////////////////////////////// Reject Reason

  @Column("character varying", {
    name: "vaccine-reject-reason",
    nullable: true,
  })
  vaccineRejectReason!: string;
  @Column("character varying", {
    name: "checkIns-reject-reason",
    nullable: true,
  })
  checkInsRejectReason!: string;
  @Column("character varying", { name: "test-reject-reason", nullable: true })
  testRejectReason!: string;
}
