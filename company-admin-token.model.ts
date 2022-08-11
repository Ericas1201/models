import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Platform } from "./enums/platform.enum";
import { Status } from "./enums/status.enum";
import { BaseTokenCompanyAdmin } from "../../api/interfaces/base-token-company-admin.interface";
import { CompanyAdmin } from "./company-admin.model";

@Entity()
export class CompanyAdminToken implements BaseTokenCompanyAdmin {
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

  @ManyToOne(() => CompanyAdmin, (admin) => admin.tokens, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true,
  })
  user: CompanyAdmin;

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
