import { Router } from "express";
import { AdminUserController } from "../../controllers/admin/user.controller";
import {
  authorizedMiddleware,
  adminOnlyMiddleware,
} from "../../middlewares/authorized.middleware";

const adminUserController = new AdminUserController();
const router = Router();

// CREATE admin user
router.post(
  "/", // POST /api/admin/users
  authorizedMiddleware, // user must be logged in
  adminOnlyMiddleware, // user must be admin
  adminUserController.createUser
);

// GET one user
router.get(
  "/:id",
  authorizedMiddleware,
  adminOnlyMiddleware,
  adminUserController.getOneUser
);

export default router;
