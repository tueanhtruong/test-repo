import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { TestCovid } from "./test_covid";

@Entity("test_type")
export class TestType {
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

  @OneToMany(() => TestCovid, (testCovid) => testCovid.testType)
  testCovid!: TestCovid;
}
