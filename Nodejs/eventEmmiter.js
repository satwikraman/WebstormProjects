const EventEmitter = require('events');
const eventEmitter= new EventEmitter();
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2)
})
eventEmitter.emit('tutorial',1,2);
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
       return this._name;
    }
}
let satwik= new Person('satwik');
satwik.on('name',()=>{
    console.log("My name is " +satwik.name);
});
let raman= new Person('raman');
raman.on('name',()=>{
    console.log("My name is " +raman.name);
});
satwik.emit('name');
raman.emit('name');