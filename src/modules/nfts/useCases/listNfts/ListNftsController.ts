import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListNftsUseCase } from "./ListNftsUseCase";

class ListNftsController {
  async handle(_: Request, response: Response) {
    const listNftsUseCase = container.resolve(ListNftsUseCase);

    const all = await listNftsUseCase.execute();

    return response.json(all);
  }
}

export { ListNftsController }