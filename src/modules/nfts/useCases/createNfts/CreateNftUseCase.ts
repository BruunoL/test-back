import { inject, injectable } from "tsyringe";
import { INftsRepository } from "../../dtos/INftsRepository";
import { Nft } from "../../infra/typeorm/entities/Nft";

interface IRequest {
  qtd_nfts;
  asset_id;
}

@injectable()
class CreateNftUseCase {
  constructor(
    @inject("NftsRepository")
    private nftsRepository: INftsRepository
  ) { }

  async execute({ qtd_nfts, asset_id }: IRequest): Promise<Nft[]> {
    let nft;
    for (let i = 1; i <= qtd_nfts; i++) {
      nft = await this.nftsRepository.create({
        qtd_nfts,
        asset_id,
      });
    }
    return nft;
  }
}

export { CreateNftUseCase };
