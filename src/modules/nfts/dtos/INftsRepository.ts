import { Nft } from "../infra/typeorm/entities/Nft";

interface ICreateNftsDTO {
  qtd_nfts: number;
  asset_id: string;
}

interface INftsRepository {
  list(): Promise<Nft[]>;
  create(ICreateNftsDTO): Promise<Nft>;
}

export { INftsRepository, ICreateNftsDTO };