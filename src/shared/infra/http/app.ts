import "reflect-metadata";
import "dotenv/config";

import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";

import "../../container";

import { AppError } from "../../errors/AppError";

import createConnection from "../../infra/typeorm";

import routes from "./routes";

createConnection();

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, _: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Erro interno no servidor - " + err,
  });
});

export { app };
