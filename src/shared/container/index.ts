import { container } from "tsyringe";

import './providers';

import { IAssetsRepository } from "../../modules/assets/dtos/IAssetsRepository";
import { AssetsRepository } from "../../modules/assets/infra/typeorm/repositories/AssetsRepository";
import { NftsRepository } from "../../modules/nfts/infra/typeorm/repositories/NftsRepository";
import { INftsRepository } from "../../modules/nfts/dtos/INftsRepository";
import { IAdminToken } from "../../modules/admin/dtos/IAdminToken";
import { AdminTokenRepository } from "../../modules/admin/repositories/AdminTokenRepository";

container.registerSingleton<IAssetsRepository>(
  "AssetsRepository",
  AssetsRepository
);

container.registerSingleton<INftsRepository>("NftsRepository", NftsRepository);

container.registerSingleton<IAdminToken>(
  "AdminTokenRepository",
  AdminTokenRepository
);