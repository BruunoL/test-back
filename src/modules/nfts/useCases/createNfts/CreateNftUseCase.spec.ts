import { NFtsRepositoryInMemory } from "../../repositories/in-memory/NFtsRepositoryInMemory";
import { CreateNftUseCase } from "./CreateNftUseCase";

let createNftUseCase: CreateNftUseCase;
let nftRepository: NFtsRepositoryInMemory;


describe("Create Nft", () => {
  beforeEach(() => {
    nftRepository = new NFtsRepositoryInMemory();

    createNftUseCase = new CreateNftUseCase(
      nftRepository
    );
  });

  it("should be able to create a nft", async () => {
    const result = await createNftUseCase.execute({
      "qtd_nfts": 5,
      "asset_id": "5c4fa4d8-fa03-4a86-a99f-b7a7cc4aa5cb"
    });

    expect(result).toHaveProperty("id");
  });

  it("should be able to create a informed qtd_nfts ", async () => {
    const result = await createNftUseCase.execute({
      "qtd_nfts": 5,
      "asset_id": "5c4fa4d8-fa03-4a86-a99f-b7a7cc4aa5cb"
    });

    expect(result).toHaveProperty("qtd_nfts", 5);
  });
});