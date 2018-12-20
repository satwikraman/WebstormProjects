function declaration() {
    console.log("function declaration");
}
var expression = function () {
    console.log("funmction expression");
};
var constructor = new Function("console.log('function constructor')");
console.log(typeof (declaration()));//global
console.log(typeof (expression()));//modules
console.log(typeof (constructor()));//not preffered
