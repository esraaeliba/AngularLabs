import Account from "./Account";
import AccountInterface from "./AccountInterface";

class CurrentAccount extends Account implements AccountInterface {
  dateOfOpening: Date;
  interestRate: number;
  constructor(
    accNo: string,
    balance: number,
    dateOfOpening: Date,
    interestRate: number
  ) {
    super(accNo, balance);
    this.dateOfOpening = dateOfOpening;
    this.interestRate = interestRate;
  }
  public addCustomer(): void {}
  public removeCustomer(): void {}
}

export default CurrentAccount;
