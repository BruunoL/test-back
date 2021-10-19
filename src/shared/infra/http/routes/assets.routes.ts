import { Router } from "express";
import { CreateAssetController } from "../../../../modules/assets/useCases/createAsset/CreateAssetController";
import { ListAssetsController } from "../../../../modules/assets/useCases/listAssets/ListAssetsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const assetsRoutes = Router();

const createAssetController = new CreateAssetController();
const listAssetsController = new ListAssetsController();

assetsRoutes.use(ensureAuthenticated);

assetsRoutes.post("/", createAssetController.handle);

assetsRoutes.get("/", listAssetsController.handle);

export { assetsRoutes };
