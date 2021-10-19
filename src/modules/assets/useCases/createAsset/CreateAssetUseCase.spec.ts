import { PinataProviderInMemory } from "../../../../shared/container/providers/PinataProvider/implementations/in-memory/PinataProviderInMemory";
import { AssetsRepositoryInMemory } from "../../repositories/in-memory/AssetsRepositoryInMemory";
import { CreateAssetUseCase } from "./CreateAssetUseCase";

let createAssetUseCase: CreateAssetUseCase;
let assetsRepository: AssetsRepositoryInMemory;
let pinataProvider: PinataProviderInMemory;

describe("Create Asset", () => {
  beforeEach(() => {
    assetsRepository = new AssetsRepositoryInMemory();
    pinataProvider = new PinataProviderInMemory();

    createAssetUseCase = new CreateAssetUseCase(
      assetsRepository,
      pinataProvider
    );
  });

  it("should be able to create a asset", async () => {
    const result = await createAssetUseCase.execute({
      "name": "Teste",
      "description": "Teste de imagem",
      "image": "0_kjOwhsnRP6o9.png"
    });

    expect(result).toHaveProperty("token_ipfs");
  });
});