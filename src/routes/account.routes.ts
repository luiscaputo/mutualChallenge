import { Router } from "express";
import ActiveAccountController from "../controllers/account/activeAccount.controller";
import CreateAccountController from "../controllers/account/createAccount.controller";
import DesactiveAccountController from "../controllers/account/disableAccount.controller";

const router = Router();
// Exporting controllers
const createAccountController = new CreateAccountController();
const desactiveAccountController = new DesactiveAccountController();
const activeAccountController = new ActiveAccountController();

// Creating Routes
router.post("/account/create", createAccountController.handle);
router.put("/account/active", activeAccountController.handle);
router.put("/account/desactive", desactiveAccountController.handle);

// Exporting routes
export default router;