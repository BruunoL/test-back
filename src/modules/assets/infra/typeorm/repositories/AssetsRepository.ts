import { getRepository, Repository } from "typeorm";
import { Asset } from "../entities/Asset";
import { IAssetsRepository, ICreateAssetDTO } from "../../../dtos/IAssetsRepository";

class AssetsRepository implements IAssetsRepository {
  private repository: Repository<Asset>;

  constructor() {
    this.repository = getRepository(Asset);
  }

  async list(): Promise<Asset[]> {
    const assets = await this.repository.find();

    return assets;
  }

  async create({
    name,
    description,
    image,
    image_url,
    token_ipfs,
  }: ICreateAssetDTO): Promise<Asset> {
    const asset = await this.repository.create({
      name,
      description,
      image,
      image_url,
      token_ipfs,
    });

    this.repository.save(asset);

    return asset;
  }
}

export { AssetsRepository };
