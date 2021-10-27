import { createQueryBuilder, getCustomRepository } from "typeorm";
import AccountRepository from "../../repositories/account.repositories";

export default class ActiveAccount {
    async execute(idAccountActive: string) {
        const accountRepository = getCustomRepository(
            AccountRepository
        );
        try {
            const verifyIfExistsAccount = await accountRepository.findOne({
                where: {
                    id: idAccountActive
                }
            });
            if (verifyIfExistsAccount) {
                const accountDesactiveStatus = verifyIfExistsAccount.status;
                if (accountDesactiveStatus === "Desactive") {
                    await accountRepository
                        .createQueryBuilder()
                        .update()
                        .set({
                            status: "Active"
                        })
                        .where("id = :id", { id: idAccountActive })
                        .execute();
                    return 'Account is Actived';
                }
            }
            return 'This Account Not Exists';
        } catch (err) {
            return err.message
        }
    }
}