import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import {
  District,
  Province,
  TripProfile,
  TripPurposes,
  TripStatus,
  VehicleType,
  Ward,
} from ".";

@Entity("trip")
export class Trip {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @Column("date", {
    name: "departure_date",
    unique: false,
    nullable: true,
  })
  departureDate!: string;

  @Column("boolean", {
    name: "is_leaving_trip",
    unique: false,
    nullable: true,
  })
  isLeavingTrip!: boolean;

  /////////////////////////////////////////////////////

  @ManyToOne(() => Province, (province) => province.departureTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "departure_province_id", referencedColumnName: "id" }])
  departureProvince!: Province;

  @Column("integer", { name: "departure_province_id", nullable: true })
  departureProvinceId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => District, (district) => district.departureTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "departure_district_id", referencedColumnName: "id" }])
  departureDistrict!: District;

  @Column("integer", { name: "departure_district_id", nullable: true })
  departureDistrictId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => Ward, (ward) => ward.departureTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "departure_ward_id", referencedColumnName: "id" }])
  departureWard!: Ward;

  @Column("integer", { name: "departure_ward_id", nullable: true })
  departureWardId!: number;

  @Column("character varying", {
    name: "departure_address",
    length: 250,
    nullable: true,
  })
  departureAddress!: string;

  /////////////////////////////////////////////////////

  @ManyToOne(() => Province, (province) => province.destinationTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "destination_province_id", referencedColumnName: "id" }])
  destinationProvince!: Province;

  @Column("integer", { name: "destination_province_id", nullable: true })
  destinationProvinceId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => District, (district) => district.destinationTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "destination_district_id", referencedColumnName: "id" }])
  destinationDistrict!: District;

  @Column("integer", { name: "destination_district_id", nullable: true })
  destinationDistrictId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => Ward, (ward) => ward.destinationTrip, {
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  })
  @JoinColumn([{ name: "destination_ward_id", referencedColumnName: "id" }])
  destinationWard!: Ward;

  @Column("integer", { name: "destination_ward_id", nullable: true })
  destinationWardId!: number;

  @Column("character varying", {
    name: "destination_address",
    length: 250,
    nullable: true,
  })
  destinationAddress!: string;

  /////////////////////////////////////////////////////

  @Column("date", {
    name: "check_ins_date",
    unique: false,
    nullable: true,
  })
  checkInsDate!: string;

  @Column("date", {
    name: "check_out_date",
    unique: false,
    nullable: true,
  })
  checkOutDate!: string;

  /////////////////////////////////////////////////////

  @ManyToOne(() => TripStatus, (tripStatus) => tripStatus.trip, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "trip_status_id", referencedColumnName: "id" }])
  tripStatus!: TripStatus;

  @Column("int", { name: "trip_status_id", nullable: false, default: 1 })
  tripStatusId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => TripPurposes, (tripPurpose) => tripPurpose.trip, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "trip_purpose_id", referencedColumnName: "id" }])
  tripPurpose!: TripPurposes;

  @Column("int", { name: "trip_purpose_id", nullable: true })
  tripPurposeId!: number;

  /////////////////////////////////////////////////////

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.trip, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vehicle_type_id", referencedColumnName: "id" }])
  vehicleType!: VehicleType;

  @Column("int", { name: "vehicle_type_id", nullable: true })
  vehicleTypeId!: number;

  @Column("character varying", {
    name: "vehicle_number",
    length: 50,
    unique: false,
    nullable: true,
  })
  vehicleNumber!: string;

  /////////////////////////////////////////////////////

  @OneToMany(() => TripProfile, (tripProfile) => tripProfile.trip, {
    onUpdate: "CASCADE",
    onDelete: "DEFAULT",
  })
  tripProfile!: TripProfile[];

  /////////////////////////////////////////////////////

  @Column("uuid", {
    name: "primary_traveler_id",
    nullable: false,
  })
  primaryTravelerId!: string;

  /////////////////////////////////////////////////////
}
