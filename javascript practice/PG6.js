/*function add (a,b){
    return a+b
}
console.log(add())
console.log(add(1,2))
//console.log(add(a,b))
console.log(add(1))
console.log(add(1,2,3))
*/
function add() {
    var results=0
    console.log(arguments)
    for(var i in arguments){
        results+=arguments[i]
    }
    return results
}
console.log(add())
console.log(add(1))
console.log(add(1,2))
console.log(add(1,2,3))