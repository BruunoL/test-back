import { inject, injectable } from "tsyringe";
import * as fs from "fs";
import { AppError } from "../../../../shared/errors/AppError";
import { IAssetsRepository } from "../../dtos/IAssetsRepository";
import { IPinataProvider } from "../../../../shared/container/providers/PinataProvider/IPinataProvider";
import { Asset } from "../../infra/typeorm/entities/Asset";

interface IRequest {
  name: string;
  description: string;
  image: string;
}

@injectable()
class CreateAssetUseCase {
  constructor(
    @inject("AssetsRepository")
    private assetsRepository: IAssetsRepository,
    @inject("PinataProvider")
    private pinataProvider: IPinataProvider
  ) { }

  async execute({ name, description, image }: IRequest): Promise<Asset> {
    const readableStreamForFile = fs.createReadStream("./images/" + image);

    if (!readableStreamForFile) {
      throw new AppError("Imagem não encontrada. Por favor coloque na pasta imagens.");
    }

    const options = {
      pinataMetadata: {
        name: image,
      },
      pinataOptions: {
        cidVersion: 0,
      },
    };

    const response = await this.pinataProvider.pinFileToIPFS({ readableStreamForFile, options });

    if (response.isDuplicate) {
      throw new AppError("Já existe um IPFS para esse arquivo.");
    }

    const image_url = response.image_url;
    const token_ipfs = response.IpfsHash;

    const asset = await this.assetsRepository.create({
      name,
      description,
      image,
      image_url,
      token_ipfs,
    });

    return asset;
  }
}

export { CreateAssetUseCase };
