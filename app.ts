import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { Plus10Account } from "./class/Plus10Account";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(10);
peopleAccount.getBalance();
peopleAccount.withdraw(5);
peopleAccount.getBalance();
console.log(peopleAccount);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log(companyAccount);

const plus10Account: Plus10Account = new Plus10Account("Enzo", 3);
plus10Account.deposit(100);
plus10Account.getBalance();
