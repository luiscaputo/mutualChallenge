import axios from "axios";
import { getCustomRepository } from "typeorm";
import AccountRepository from "../../repositories/account.repositories";
import VerifyDDD from "../verifyDDD.service";

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
            if (cpf.length != 12) {
                return 'Invalid cpf';
            }

            const verifyDDD = new VerifyDDD();
            await verifyDDD.execute(phone);
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