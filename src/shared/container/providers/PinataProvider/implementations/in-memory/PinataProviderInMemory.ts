import { v4 as uuidV4 } from "uuid";
import NodeFormData from "form-data";
import { IOptions, IPinataProvider, IResponse } from "../../IPinataProvider";
import { AppError } from "../../../../../errors/AppError";

interface IAsset {
  image_url: string,
  IpfsHash: string,
  isDuplicate: boolean
}

class PinataProviderInMemory implements IPinataProvider {

  private asset: IAsset;

  async pinFileToIPFS({ readableStreamForFile, options }: IOptions): Promise<IResponse> {
    try {
      const data = new NodeFormData();

      data.append("file", readableStreamForFile);
      data.append("pinataMetadata", JSON.stringify(options.pinataMetadata));
      data.append("pinataOptions", JSON.stringify(options.pinataOptions));

      const image_url = data.getBoundary();

      let IpfsHash;

      IpfsHash = uuidV4();

      const isDuplicate = false;

      this.asset = {
        image_url,
        isDuplicate,
        IpfsHash
      }

      return this.asset;
    } catch (err) {
      new AppError("Erro interno do servidor: " + err);
    }
  }
}

export { PinataProviderInMemory }