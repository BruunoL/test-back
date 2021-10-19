import { Router } from "express";
import { ListNftsController } from "../../../../modules/Nfts/useCases/listNfts/ListNftsController";
import { CreateNftsController } from "../../../../modules/nfts/useCases/createNfts/CreateNftController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const nftsRoutes = Router();

const createNftsController = new CreateNftsController();
const listNftsController = new ListNftsController();

nftsRoutes.use(ensureAuthenticated);

nftsRoutes.post("/", createNftsController.handle);

nftsRoutes.get("/", listNftsController.handle);

export { nftsRoutes };
