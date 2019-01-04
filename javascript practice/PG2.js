var obj={
    name:"satwik",
    age:22
}
for(var item in obj){
	console.log(obj[item])
}
obj.pop;
console.log(obj)
var x=[]
x.push(1)
x.push(2)
x.push(3)
x.push(4)
x.push(5)
console.log(x)
x.pop()
console.log(x)
x.unshift(35)
x.unshift(26)
x.unshift(17)
/*console.log(x)
x.shift()
console.log(x)
console.log(x.sort())
console.log(x.reverse())
var y=[7,8]
var z=x.concat(y)
console.log(z)
console.log(z.join(", "))
console.log(x.toLocaleString())
console.log(x.indexOf(35))*/
console.log(x)
console.log(x.slice(2,3))
console.log(x.splice(2,1,5,65,54))
console.log(x)
console.log(this)