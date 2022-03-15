import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { TestType } from "./test_type";
import { TripProfile } from "./trip_profile";

@Entity("test_covid")
export class TestCovid {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("date", {
    name: "test_date",
    nullable: true,
  })
  testDate!: string;

  @Column("character varying", {
    name: "covid_test_url",
    length: 250,
    nullable: true,
  })
  covidTestUrl!: string;

  @Column("boolean", {
    name: "has_test_covid",
    nullable: true,
  })
  hasTestCovid!: boolean;

  @ManyToOne(() => TestType, (testType) => testType.testCovid, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "test_type_id", referencedColumnName: "id" }])
  testType!: TestType;

  @Column("int", {
    name: "test_type_id",
    nullable: true,
  })
  testTypeId!: number;

  ///////////////////////////////////////////////////////

  @OneToOne(() => TripProfile, (tripProfile) => tripProfile.testCovid, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  tripProfile!: TripProfile;

  ///////////////////////////////////////////////////////
}
