import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppResponse } from "../../@types";
import { Account } from "../../models/Account";
import AccountRepository from "../../repositories/account.repositories";

export default class ListAccountsController {
    async handle(request: Request, response: Response<AppResponse<Account[]>>) {
        try {
            const accountRepository = getCustomRepository(
                AccountRepository
            );
            const getAllAccounts = await accountRepository.find();
            if (!getAllAccounts) {
                return response.status(400)
                    .json({
                        success: false,
                        message: "All account is Empty"
                    });
            }
            return response.status(200)
                .json({
                    success: true,
                    message: "All Accounts",
                    data: getAllAccounts
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