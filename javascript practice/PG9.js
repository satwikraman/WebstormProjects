/*function message() {
    console.log("message")
}
message()//Implicit Binding
*/
var message="message1"
var obj ={
    message:"In side obj",
    printMessage: function(){
        console.log(this.message)
    }
}
 function printMessage(a, b, c){
    console.log(this.message )
}
arr=[10,20,30];
var obj2={message:"message2"}
obj2.printMessage=obj.printMessage
//obj.printMessage()
//obj2.printMessage()
//printMessage.call(obj,1,2,4)
//printMessage.call(obj2)
printMessage.apply(obj,arr)
console.log(this)