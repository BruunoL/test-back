import { ICreateNftsDTO, INftsRepository } from "../../dtos/INftsRepository";
import { Nft } from "../../infra/typeorm/entities/Nft";

class NFtsRepositoryInMemory implements INftsRepository {
  nfts: Nft[] = [];

  async list(): Promise<Nft[]> {
    const all = this.nfts;

    return all;
  }

  async create({
    qtd_nfts,
    asset_id
  }: ICreateNftsDTO): Promise<Nft> {
    const nft = new Nft();

    Object.assign(nft, {
      qtd_nfts,
      asset_id,
    });

    this.nfts.push(nft);

    return nft;
  }
}

export { NFtsRepositoryInMemory };
