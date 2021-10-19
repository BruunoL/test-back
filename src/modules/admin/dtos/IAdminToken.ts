import { Admin } from "../entities/Admin";

interface IRequestAdmin {
  user_admin: string;
  password_admin: string;
}

interface IAdminToken {
  findAdminByUserAndPassword({ user_admin, password_admin }: IRequestAdmin): Admin;
}

export { IAdminToken, IRequestAdmin };