import { Account } from "../models/Account";
import CreateAccount from "../services/account/createAccount.service"

describe("Create Account", () => {
    it("Need Create a new Account", async () => {
        const createAccountService = new CreateAccount();

        const accountData: Account = {
            nome: "Teste",
            cpf: "1234567890",
            phone: "24444444444",
            adress: "teste adress",
            id: undefined,
            status: "",
            createdAt: undefined,
            disabledAt: undefined
        }

        const account = await createAccountService.execute(accountData);

        expect(account).toHaveProperty("id");
        expect(accountData.nome).toBe("Teste");
    });
})