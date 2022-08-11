import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseCompany } from "../../api/interfaces/base-company.interface";
import { CompanyAdmin } from "./company-admin.model";
import { Status } from "./enums/status.enum";

@Entity()
export class Company implements BaseCompany {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 100, comment: "Nombre de la empresa" })
  name: string;

  @Column({
    type: "varchar",
    length: 50,
    comment: "Rason social de la empresa",
  })
  businessName: string;

  @Column({
    type: "varchar",
    length: 25,
    default: "",
    comment: "Nit Identificacion tributaria",
  })
  nit: string;

  @Column({ type: "varchar", length: 180, comment: "Representante legal" })
  legalRepresentative: string;

  @Column({
    type: "text",
    nullable: true,
    comment: "Imagen o logo de la empresa",
  })
  photoUrl: string;

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

  @OneToMany(() => CompanyAdmin, (admins) => admins.company)
  admins: CompanyAdmin[];
}
