class Account {
    private Acc_no;
    private Balance;
 
   constructor(){} 
  debitAmount(){}
  creditAmount(){}
  
  get accountNo(){
    return this.Acc_no;
  }
  set accountNo(val){
    this.Acc_no=val;
  }

  get balance(){
    return this.Balance;
  }
  set balance(val){
    this.Balance=val;
  }
}

interface IAccount{
    Data_of_opening:string;
    addCustomer()
    removeCustomer()
}

class SavingAccount extends Account implements IAccount {
    Data_of_opening:string;
   
    constructor(public Min_Balance=1000 ){
        super()
      
    }
    addCustomer(){}
    removeCustomer(){}
}

class CurrentAccount  extends Account implements IAccount{
   
    Data_of_opening:string;
 
    constructor(public interest_rate= 7.5){
        super()
    }
    addCustomer(){}
    removeCustomer(){}
}