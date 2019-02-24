/*function getAccount(accountNumber, accountBalance, accountType){
    var withdraw= function(amount){
        this.balance-=amount
        return this.balance
    }
    return{
        balance:accountBalance,
        withdraw:withdraw
    }
}
var account=getAccount(100,1000,'checking')
console.log(account.withdraw(100))*/
var account1=new Object()
account1.type="checking"
account1.number=102
Object.defineProperty(account1,"balance",{
    enumerable:true,
    writable:true,
    configurable:true,
    value:1000.0

})
/*var obj={
    balance:1000,
    type:"checking",
    number:101

}*/
//account1.balance=2000
for(var key in account1){
    console.log("key "+key+" value "+ account1[key])
}
