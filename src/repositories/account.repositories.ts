import { EntityRepository, Repository } from "typeorm";
import { Account } from "../models/Account";

@EntityRepository(Account)
export default class AccountRepository extends Repository<Account> { }