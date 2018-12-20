//Hoisting
//var i
//var j
/*
variable declaration is moved to top
variable Initializations are moved to top
 */
console.log(i);
j=10
console.log(j)
var i=10
var j
/*
function declaration is moved to top
function expression is not moved to top
 */
//console.log("message: "+message())

console.log(message1())
function message1() {
    console.log("hello")
}
var message1=function(){
    console.log("hello world")
}