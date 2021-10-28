import axios from "axios";

export default class VerifyDDD {
    async execute(phone: string) {
        if (phone.length != 15) {
            return 'Invalid phone';
        }
        const getDDDInPhone = phone[0] + phone[1];
        const verifyDDD = await axios.get(`
            https://brasilapi.com.br/api/ddd/v1/${getDDDInPhone}
        `);
        if (!(verifyDDD.status === 200)) {
            return 'Invalid DDD';
        }
        return getDDDInPhone;
    }
}