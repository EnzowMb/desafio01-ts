import { DioAccount } from "./DioAccount";

export class Plus10Account extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + (value + 10);
    }
  };
}
