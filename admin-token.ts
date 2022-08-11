import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseTokenAdmin } from "../../api/interfaces/base-admin-token.interface";
import { Admin } from "./admin.model";
import { Platform } from "./enums/platform.enum";
import { Status } from "./enums/status.enum";

@Entity()
export class AdminToken implements BaseTokenAdmin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pushToken: string;

  @Column({ nullable: true })
  authToken: string;

  @Column({
    length: 50,
  })
  version: string;

  @ManyToOne(() => Admin, (admin) => admin.tokens, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true,
  })
  user: Admin;

  @Column({
    type: "enum",
    enum: Platform,
  })
  platform: Platform;

  @Column()
  lastUsed: Date;

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
