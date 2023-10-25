export interface IAccount {
  name: string;
  balance: number;
  status?: boolean;
  deposite?: () => void;
}

const account1: IAccount = {
  name: "Mensa",
  balance: 99999999999999,
};

let some_account: IAccount[];
