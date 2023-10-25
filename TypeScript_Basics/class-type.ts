import { IAccount } from "./interface-type";

class InvestmentAccount implements IAccount {
  name: string;
  balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }
}
