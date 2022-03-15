import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("testusers")
export class TestUsers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, type: "varchar" })
  firstName!: string;

  @Column({ length: 50, type: "varchar" })
  lastName!: string;

  @Column()
  age!: number;
}
