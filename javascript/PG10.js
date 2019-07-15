function createAccount() {
    var balance = 100
    return {
        withdraw: function (amount) {
            balance -= amount
            console.log(balance)
        }
    }
}
var account = createAccount()
account.withdraw(10)