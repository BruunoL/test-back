import axios from "axios";
import NodeFormData from "form-data";
import { IOptions, IPinataProvider, IResponse } from "../IPinataProvider";
import { config } from "../../../../../config/config";
import { AppError } from "../../../../errors/AppError";

class PinataProvider implements IPinataProvider {

  async pinFileToIPFS({ readableStreamForFile, options }: IOptions): Promise<IResponse> {
    const data = new NodeFormData();

    data.append("file", readableStreamForFile);
    data.append("pinataMetadata", JSON.stringify(options.pinataMetadata));
    data.append("pinataOptions", JSON.stringify(options.pinataOptions));

    const response = await axios.post<IResponse>(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data,
      {
        withCredentials: true,
        headers: {
          "Content-type": `multipart/form-data; boundary= ${data.getBoundary()}`,
          pinata_api_key: config.pinata_api_key,
          pinata_secret_api_key: config.pinata_secret_api_key,
        },
      }
    );

    if (response.status !== 200) {
      new AppError(
        "Erro inesperado do servidor ao executar o arquivo para IPFS: " +
        response.statusText
      );
    }

    const isDuplicate = response.data.isDuplicate;
    const IpfsHash = response.data.IpfsHash;
    const image_url = config.url_pinata_imgs + IpfsHash;

    return {
      IpfsHash,
      image_url,
      isDuplicate
    };
  }
}

export { PinataProvider }