import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Account } from "../../models/Account";
import DesactiveAccount from "../../services/account/desactiveAccount.service";

export default class DesactiveAccountController {
    async handle(request: Request<string>, response: Response<AppResponse<Account[]>>) {
        try {
            const { idAccountDesactive } = request.body;
            if (!idAccountDesactive) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "This account not Exists"
                    });
            }
            const desactiveAccountService = new DesactiveAccount();

            const desactivingAccount = await desactiveAccountService.execute(
                idAccountDesactive
            );
            return response.status(200)
                .json({
                    success: true,
                    message: desactivingAccount
                })
        } catch (err) {
            return response.status(400)
                .json({
                    success: false,
                    message: err.message
                });
        }

    }
}