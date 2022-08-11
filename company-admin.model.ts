import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseCompanyAdmin } from "../../api/interfaces/base-company-admin.interface";
import { CompanyAdminToken } from "./company-admin-token.model";
import { Company } from "./company.model";
import { AccountType } from "./enums/acount-type.enum";
import { Status } from "./enums/status.enum";

@Entity()
export class CompanyAdmin implements BaseCompanyAdmin {
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

  @OneToMany(() => CompanyAdminToken, (token) => token.companyAdmin)
  tokens: CompanyAdminToken[];

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

  @ManyToOne(() => Company, (company) => company.admins)
  company: Company;
}
