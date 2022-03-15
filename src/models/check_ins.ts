import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { TripProfile } from "./trip_profile";

@Entity("check_ins")
export class CheckIns {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("boolean", { name: "is_coughing", nullable: true })
  isCoughing!: boolean;

  @Column("boolean", { name: "is_fever", nullable: true })
  isFever!: boolean;

  @Column("boolean", { name: "is_loss_taste", nullable: true })
  isLossOfTaste!: boolean;

  @Column("boolean", { name: "is_runny_nose", nullable: true })
  isRunnyNose!: boolean;

  @Column("boolean", { name: "is_shortness_breath", nullable: true })
  isShortnessBreath!: boolean;

  @Column("boolean", { name: "is_tiredness", nullable: true })
  isTiredness!: boolean;

  @Column("boolean", { name: "is_travel_to_other_location", nullable: true })
  isTravelToOtherLocation!: boolean;

  @Column("character varying", {
    name: "locations",
    nullable: true,
    length: 250,
  })
  locations!: string;

  ///////////////////////////////////////////////////////

  @OneToOne(() => TripProfile, (tripProfile) => tripProfile.checkIns, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  tripProfile!: TripProfile;

  ///////////////////////////////////////////////////////
}
