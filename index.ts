import { AdminToken } from "./admin-token";
import { Admin } from "./admin.model";
import { CompanyAdminToken } from "./company-admin-token.model";
import { CompanyAdmin } from "./company-admin.model";
import { Company } from "./company.model";
import { UserToken } from "./user-token.model";
import { User } from "./user.model";

export default [
  User,
  UserToken,
  Company,
  CompanyAdmin,
  CompanyAdminToken,
  Admin,
  AdminToken,
];
