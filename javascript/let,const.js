function abc() {
    a = 10;
    let b = 15;
    const c = 20;
    //console.log(b);//Local scope
    //console.log(c);//Local scope and cannot be updated
}
abc()
console.log(a);//global scope