var a=40
var b=0
for(var i in a){
    if(a%i===0){
        b=b+i
    }
}
if(b===a)
    console.log(a+" is a Perfect Number")
else
    console.log(a+" is not a Perfect Number")