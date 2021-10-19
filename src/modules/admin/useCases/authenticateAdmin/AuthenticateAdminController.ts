import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateAdminUseCase } from "./AuthenticateAdminUseCase";

class AuthenticateAdminController {
  async handle(request: Request, response: Response) {
    const { user_admin, password_admin } = request.body;

    const authAdminUseCase = container.resolve(AuthenticateAdminUseCase);

    const token = await authAdminUseCase.execute({
      user_admin,
      password_admin
    });

    return response.json(token);
  }
}

export { AuthenticateAdminController };
