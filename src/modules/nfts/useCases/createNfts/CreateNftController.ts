import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNftUseCase } from "./CreateNftUseCase";

class CreateNftsController {
  async handle(request: Request, response: Response) {
    const { qtd_nfts, asset_id } = request.body;

    const createNftUseCase = container.resolve(CreateNftUseCase);

    const nft = await createNftUseCase.execute({
      qtd_nfts,
      asset_id
    });

    return response.status(201).json(nft);
  }
}

export { CreateNftsController }