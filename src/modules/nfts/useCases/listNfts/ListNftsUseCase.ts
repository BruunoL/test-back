import { inject, injectable } from "tsyringe";
import { Nft } from "../../infra/typeorm/entities/Nft";
import { INftsRepository } from "../../dtos/INftsRepository";

@injectable()
class ListNftsUseCase {
  constructor(
    @inject("NftsRepository")
    private nftsRepository: INftsRepository
  ) { }

  async execute(): Promise<Nft[]> {
    const nfts = await this.nftsRepository.list();
    return nfts;
  }
}

export { ListNftsUseCase };
