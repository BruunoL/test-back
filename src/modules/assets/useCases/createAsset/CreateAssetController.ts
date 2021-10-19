import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

class CreateAssetController {
  async handle(request: Request, response: Response) {
    const { name, description, image } = request.body;

    const createAssetUseCase = container.resolve(CreateAssetUseCase);

    const asset = await createAssetUseCase.execute({
      name,
      description,
      image,
    });

    console.log(asset);

    return response.status(201).json(asset);
  }
}

export { CreateAssetController };
