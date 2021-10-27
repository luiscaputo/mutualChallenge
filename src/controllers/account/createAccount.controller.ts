import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Account } from "../../models/Account";
import CreateAccount, { ICreateAccount } from "../../services/account/createAccount.service";

export default class CreateAccountController {
    async handle(request: Request<ICreateAccount>, response: Response<AppResponse<Account[]>>) {
        try {
            const createAccountService = new CreateAccount();

            const {
                nome,
                cpf,
                phone,
                adress } = request.body;

            if (!nome || !cpf || !phone || !adress) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "You need send all datas"
                    });
            }

            const createAccount = await createAccountService.execute({
                nome,
                cpf,
                phone,
                adress
            });
            return response.status(201)
                .json({
                    success: true,
                    message: "Account Created",
                    data: createAccount
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