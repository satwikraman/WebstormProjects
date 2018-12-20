//recusion function declaration
/*function fact(n) {
    if(n===1){
        return 1
    }
        return n*fact(n-1)
}
console.log(fact(10))*/
//recursion function expression
var fact =function temp(n) {
    if(n===1){
        return 1
    }
    return n*temp(n-1)
}
console.log(fact(10))
