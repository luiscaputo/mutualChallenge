import { getCustomRepository } from "typeorm";
import AccountRepository from "../../repositories/account.repositories";
import VerifyDDD from "../verifyDDD.service";

export interface IAlterAccount {
    id: string,
    phone?: string,
    adress?: string
}

export default class AlterAccount {
    async execute({ id, phone, adress }: IAlterAccount) {
        try {
            const accountRepository = getCustomRepository(
                AccountRepository
            );
            const verifyDDD = new VerifyDDD();
            if (!phone) {
                const updating = await accountRepository
                    .createQueryBuilder()
                    .update()
                    .set({
                        adress,
                    })
                    .where("id = :id", { id: id })
                    .execute();
                return updating;
            } else
                if (!adress) {
                    await verifyDDD.execute(phone);
                    const updating = await accountRepository
                        .createQueryBuilder()
                        .update()
                        .set({
                            phone,
                        })
                        .where("id = :id", { id: id })
                        .execute();
                    return updating;
                }
            await verifyDDD.execute(phone);
            const updating = await accountRepository
                .createQueryBuilder()
                .update()
                .set({
                    phone,
                    adress
                })
                .where("id = :id", { id: id })
                .execute();
            return updating;
        } catch (err) {
            return err.message;
        }
    }
}