import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAssetsUseCase } from "./ListAssetsUseCase";

class ListAssetsController {
  async handle(_: Request, response: Response) {
    const listAssetsUseCase = container.resolve(ListAssetsUseCase);

    const all = await listAssetsUseCase.execute();

    return response.json(all);
  }
}

export { ListAssetsController }