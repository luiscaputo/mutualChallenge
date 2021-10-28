import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Account } from "../../models/Account";
import AlterAccount, { IAlterAccount } from "../../services/account/alterAccount.service";

export default class AlterAccountController {
    async handle(request: Request<IAlterAccount>, response: Response<AppResponse<Account[]>>) {
        try {
            const { id, phone, adress } = request.body;
            if (!id) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "Empty id is required"
                    });
            }
            if (!phone && !adress) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "Phone/Adress is Required"
                    });
            }
            const alterAccountService = new AlterAccount();
            const alteringAccount = await alterAccountService.execute({
                id,
                phone,
                adress
            });
            return response.status(200)
                .json({
                    success: true,
                    message: alteringAccount
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