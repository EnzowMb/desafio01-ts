export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + value;
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value;
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (value: number): void => {
    this.balance = value;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
