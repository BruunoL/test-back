import { Asset } from "../infra/typeorm/entities/Asset";

interface ICreateAssetDTO {
  name: string;
  description: string;
  image: string;
  image_url: string;
  token_ipfs: string;
}

interface IAssetsRepository {
  list(): Promise<Asset[]>;
  create(ICreateDepartmenDTO): Promise<Asset>;
}

export { IAssetsRepository, ICreateAssetDTO };