import { getCustomRepository } from "typeorm";
import AccountRepository from "../../repositories/account.repositories";

export default class DesactiveAccount {
    async execute(idAccountDesactive: string) {
        const accountRepository = getCustomRepository(
            AccountRepository
        );
        try {
            const verifyIfExistsAccount = await accountRepository.findOne({
                where: {
                    id: idAccountDesactive
                }
            });
            if (verifyIfExistsAccount) {
                const accountDesactiveStatus = verifyIfExistsAccount.status;
                if (accountDesactiveStatus === "Active") {
                    await accountRepository
                        .createQueryBuilder()
                        .update()
                        .set({
                            status: "Desactive"
                        })
                        .where("id = :id", { id: idAccountDesactive })
                        .execute();
                    return 'This Account was desactived';
                }
            }
            return 'This Account Not Exists';
        } catch (err) {
            return err.message
        }
    }
}