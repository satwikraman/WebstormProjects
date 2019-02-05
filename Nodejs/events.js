const events=require('events');
const util=require('util');
var Person= function(name){
    this.name=name;
};
util.inherits(Person,events.EventEmitter);
var satwik= new Person('satwik');
var raman= new Person('raman');
var vivek= new Person('vivek');
var people=[satwik,raman,vivek];
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+ ' said '+mssg);
    });
});
satwik.emit('speak','hai');
raman.emit('speak','bye');
vivek.emit('speak','yo yo');