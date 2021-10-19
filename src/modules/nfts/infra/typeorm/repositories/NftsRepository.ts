import { getRepository, Repository } from "typeorm";
import { Nft } from "../entities/Nft";
import { ICreateNftsDTO, INftsRepository } from "../../../dtos/INftsRepository";

class NftsRepository implements INftsRepository {
  private repository: Repository<Nft>;

  constructor() {
    this.repository = getRepository(Nft);
  }

  async list(): Promise<Nft[]> {
    const nfts = await this.repository.find();

    return nfts;
  }

  async create({ qtd_nfts, asset_id }: ICreateNftsDTO): Promise<Nft> {
    const nft = await this.repository.create({
      qtd_nfts,
      asset_id,
    });

    await this.repository.save(nft);

    return nft;
  }
}

export { NftsRepository };
