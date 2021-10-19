import { config } from "../../../config/config";
import { IAdminToken } from "../dtos/IAdminToken";
import { Admin } from "../entities/Admin";

interface IRequest {
  user_admin: string;
  password_admin: string;
}

class AdminTokenRepository implements IAdminToken {

  admins: Admin[] = [];

  findAdminByUserAndPassword({ user_admin, password_admin }: IRequest): Admin {
    const admin = new Admin();

    admin.name = user_admin;
    admin.password = password_admin;

    this.admins.push(admin);

    return this.admins.find((admin) => admin.name === config.user_admin && admin.password === config.password_admin);
  }
}

export { AdminTokenRepository }