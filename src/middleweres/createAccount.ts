import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';
import { showError } from '.';
import { AppResponse } from '../@types';
import { Account } from '../models/Account';
import { ICreateAccount } from '../services/account/createAccount.service';

export const createAccount = async (
    req: Request<ICreateAccount>,
    res: Response<AppResponse<Account[]>>,
    next: NextFunction
) => {
    const schema = Yup.object().shape({
        nome: Yup.string()
            .required('Informe o nome da Conta, é obrigatório'),
        cpf: Yup.string()
            .required('Informe o CPF')
            .min(12, 'O cpf deve ter 12 digitos')
            .max(12, 'O cpf deve ter 12 digitos'),
        phone: Yup.string()
            .required('Informe o Telefone')
            .min(15, 'O Telefone deve ter 15 digitos')
            .max(15, 'O Telefone deve ter 16 digitos'),
        adress: Yup.string()
            .required('Passe o endereço')
    });
    await showError(req, res, next, schema);
};