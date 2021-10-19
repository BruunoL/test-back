import * as fs from "fs";

interface IOptions {
  readableStreamForFile: fs.ReadStream,
  options: {
    pinataMetadata: {
      name: string;
    };
    pinataOptions: {
      cidVersion: number;
    };
  };
}

interface IResponse {
  IpfsHash: string;
  image_url: string;
  isDuplicate: boolean;
}

interface IPinataProvider {
  pinFileToIPFS(IOptions): Promise<IResponse>
}

export { IPinataProvider, IOptions, IResponse }