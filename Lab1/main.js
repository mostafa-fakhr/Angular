class Account {
    constructor() { }
    debitAmount() { }
    creditAmount() { }
    get accountNo() {
        return this.Acc_no;
    }
    set accountNo(val) {
        this.Acc_no = val;
    }
    get balance() {
        return this.Balance;
    }
    set balance(val) {
        this.Balance = val;
    }
}
class SavingAccount extends Account {
    constructor(Min_Balance = 1000) {
        super();
        this.Min_Balance = Min_Balance;
    }
    addCustomer() { }
    removeCustomer() { }
}
class CurrentAccount extends Account {
    constructor(interest_rate = 7.5) {
        super();
        this.interest_rate = interest_rate;
    }
    addCustomer() { }
    removeCustomer() { }
}
