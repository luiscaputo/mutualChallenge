import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Account } from "../../models/Account";
import ActiveAccount from "../../services/account/activeAccount.service";

export default class ActiveAccountController {
    async handle(request: Request<string>, response: Response<AppResponse<Account[]>>) {
        try {
            const { idAccountActive } = request.body;
            if (!idAccountActive) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "This account not Exists"
                    });
            }
            const activeAccountService = new ActiveAccount();

            const activingAccount = await activeAccountService.execute(
                idAccountActive
            );
            return response.status(200)
                .json({
                    success: true,
                    message: activingAccount
                });
        } catch (err) {
            return response.status(400)
                .json({
                    success: false,
                    message: err.message
                });
        }

    }
}