import { AssetsRepositoryInMemory } from "../../repositories/in-memory/AssetsRepositoryInMemory";
import { ListAssetsUseCase } from "./ListAssetsUseCase";

let listAssetsUseCase: ListAssetsUseCase;
let assetsRepositoryInMemory: AssetsRepositoryInMemory;

describe("List Assets", () => {
  beforeEach(() => {
    assetsRepositoryInMemory = new AssetsRepositoryInMemory();
    listAssetsUseCase = new ListAssetsUseCase(
      assetsRepositoryInMemory
    );
  });

  it("should be able to list all assets", async () => {
    const asset = await assetsRepositoryInMemory.create({
      "name": "Teste",
      "description": "Teste de imagem",
      "image": "0_kjOwhsnRP6o9.png",
      "image_url": "http:localhost:3333",
      "token_ipfs": ""
    });

    const assets = await listAssetsUseCase.execute();

    expect(assets).toEqual([asset]);
  });
});