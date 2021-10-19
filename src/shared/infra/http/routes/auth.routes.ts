import { Router } from "express";
import { AuthenticateAdminController } from "../../../../modules/admin/useCases/authenticateAdmin/AuthenticateAdminController";

const authenticateAdminController = new AuthenticateAdminController();

const authRoutes = Router();

authRoutes.post("/", authenticateAdminController.handle);

export { authRoutes };
