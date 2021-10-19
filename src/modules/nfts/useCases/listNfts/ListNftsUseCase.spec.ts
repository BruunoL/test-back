import { NFtsRepositoryInMemory } from "../../repositories/in-memory/NFtsRepositoryInMemory";
import { ListNftsUseCase } from "./ListNftsUseCase";

let listNftsUseCase: ListNftsUseCase;
let nftRepository: NFtsRepositoryInMemory;

describe("Create Nft", () => {
  beforeEach(() => {
    nftRepository = new NFtsRepositoryInMemory();

    listNftsUseCase = new ListNftsUseCase(
      nftRepository
    );
  });

  it("should be able to create a nft", async () => {
    const nft = await nftRepository.create({
      "qtd_nfts": 1,
      "asset_id": "5c4fa4d8-fa03-4a86-a99f-b7a7cc4aa5cb"
    });

    const nfts = await listNftsUseCase.execute();

    expect(nfts).toEqual([nft]);
  });
});