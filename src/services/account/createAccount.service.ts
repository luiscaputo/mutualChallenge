import axios from "axios";
import { getCustomRepository } from "typeorm";
import AccountRepository from "../../repositories/account.repositories";

export interface ICreateAccount {
    nome: string,
    cpf: string,
    phone: string,
    adress: string,
}

export default class CreateAccount {
    async execute({ nome, cpf, phone, adress }: ICreateAccount) {
        const accountRepository = getCustomRepository(
            AccountRepository
        );
        try {
            const alreadyExistsCpf = await accountRepository.findOne({ where: { cpf } });
            if (alreadyExistsCpf) {
                return 'Already exist this cpf on database';
            }
            // validate DDD using brasil api route
            const getDDDInPhone = phone[0] + phone[1];
            // running in api to verifyDDD
            const verifyDDD = await axios.get(`
                https://brasilapi.com.br/api/ddd/v1/${getDDDInPhone}
            `);
            if (!(verifyDDD.status === 200)) {
                return 'Invalid DDD';
            }
            const createAccount = accountRepository.create({
                nome,
                cpf,
                phone,
                adress,
                status: 'Active'
            });
            await accountRepository.save(
                createAccount
            );
            return createAccount;
        } catch (err) {
            return err.message
        }
    }
}