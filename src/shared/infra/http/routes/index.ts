import { Router } from "express";
import { assetsRoutes } from "./assets.routes";
import { authRoutes } from "./auth.routes";
import { nftsRoutes } from "./nfts.routes";

const routes = Router();

routes.use("/assets", assetsRoutes);
routes.use("/nfts", nftsRoutes);
routes.use("/auth", authRoutes);

export default routes;
