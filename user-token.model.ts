import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseToken } from "../../api/interfaces/base-token.interface";
import { Platform } from "./enums/platform.enum";
import { User } from "./user.model";
import { Status } from "./enums/status.enum";

@Entity()
export class UserToken implements BaseToken {
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

  @ManyToOne(() => User, (user) => user.tokens, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: true,
  })
  user: User;

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
