import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";

import { AppError } from "../../../../shared/errors/AppError";
import { IAdminToken } from "../../dtos/IAdminToken";

interface IRequest {
  user_admin: string;
  password_admin: string;
}

interface IResponse {
  name: string;
  token: string;
}

@injectable()
class AuthenticateAdminUseCase {
  constructor(
    @inject("AdminTokenRepository")
    private adminTokenrepository: IAdminToken,
  ) { }

  async execute({ user_admin, password_admin }: IRequest): Promise<IResponse> {
    const { secret_token, expires_in_token } = auth;

    const admin = this.adminTokenrepository.findAdminByUserAndPassword({ user_admin, password_admin });

    if (!admin) {
      throw new AppError("Usuário ou senha estão incorretos.");
    }

    const name = admin.name;
    const id = admin.id;

    const token = sign({}, secret_token, {
      subject: id,
      expiresIn: expires_in_token,
    });

    const returnToken: IResponse = {
      name,
      token
    };

    return returnToken;
  }
}

export { AuthenticateAdminUseCase }