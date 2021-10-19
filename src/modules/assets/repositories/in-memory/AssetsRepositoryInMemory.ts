import { IAssetsRepository, ICreateAssetDTO } from "../../dtos/IAssetsRepository";
import { Asset } from "../../infra/typeorm/entities/Asset";

class AssetsRepositoryInMemory implements IAssetsRepository {
  assets: Asset[] = [];

  async list(): Promise<Asset[]> {
    const all = this.assets;

    return all;
  }

  async create({
    name,
    description,
    image,
    image_url,
    token_ipfs,
  }: ICreateAssetDTO): Promise<Asset> {
    const asset = new Asset();

    Object.assign(asset, {
      name,
      description,
      image,
      image_url,
      token_ipfs
    });

    this.assets.push(asset);

    return asset;
  }
}

export { AssetsRepositoryInMemory };
