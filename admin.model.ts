import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseAdmin } from "../../api/interfaces/base-admin.interface";
import { AdminToken } from "./admin-token";
import { AccountType } from "./enums/acount-type.enum";
import { Status } from "./enums/status.enum";

@Entity()
export class Admin implements BaseAdmin {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 50,
  })
  fullname: string;

  @Column({
    length: 50,
    unique: true,
  })
  email: string;

  @OneToMany(() => AdminToken, (token) => token.admin)
  tokens: AdminToken[];

  @Column({
    length: 250,
    select: false,
  })
  password: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column({
    type: "enum",
    enum: AccountType,
    default: AccountType.App,
  })
  type: AccountType;

  @Column({
    default: "",
  })
  verificationCode: string;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.Active,
  })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
