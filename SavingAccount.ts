import Account from "./Account";
import AccountInterface from "./AccountInterface";

class SavingAccount extends Account implements AccountInterface {
  dateOfOpening: Date;
  minBalance: number;
  constructor(
    accNo: string,
    balance: number,
    dateOfOpening: Date,
    minBalance: number
  ) {
    super(accNo, balance);
    this.dateOfOpening = dateOfOpening;
    this.minBalance = minBalance;
  }
  public addCustomer(): void {}
  public removeCustomer(): void {}
}

export default SavingAccount;
