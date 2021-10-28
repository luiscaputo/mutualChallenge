import { Router } from "express";
import ActiveAccountController from "../controllers/account/activeAccount.controller";
import AlterAccountController from "../controllers/account/alterAccount.controller";
import CreateAccountController from "../controllers/account/createAccount.controller";
import DesactiveAccountController from "../controllers/account/disableAccount.controller";
import ListAccountsController from "../controllers/account/listAccounts.controller";

const router = Router();
// Exporting controllers
const createAccountController = new CreateAccountController();
const desactiveAccountController = new DesactiveAccountController();
const activeAccountController = new ActiveAccountController();
const listAccountController = new ListAccountsController();
const alterAccountController = new AlterAccountController();

// Creating Routes
router.get("/account/listAll", listAccountController.handle)
router.post("/account/create", createAccountController.handle);
router.put("/account/active", activeAccountController.handle);
router.put("/account/desactive", desactiveAccountController.handle);
router.put("/account/alter", alterAccountController.handle);

// Exporting routes
export default router;