import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../../config/auth";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token não encontrado.", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: admin_id } = verify(token, auth.secret_token) as IPayload;

    request.admin = {
      id: admin_id,
    };

    next();
  } catch {
    throw new AppError("Token inválido, por favor verificar!", 401);
  }
}