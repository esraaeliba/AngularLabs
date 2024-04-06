class Account {
  private accNo: string;
  private balance: number;

  public constructor(accNo: string, balance: number) {
    this.accNo = accNo;
    this.balance = balance;
  }

  public debitAmount(): void {}
  public creditAmount(): void {}
  public getBalance(): number {
    return this.balance;
  }
}

export default Account;
