var b = 10
var obj = {
    a: 12,
    inc: function () {
        this.a = this.a + 1
        return this.a
    },
    dec: () => {
        this.b = this.b - 1
        return this.b
    }
}
obj.inc();
console.log(obj.a)
console.log(obj.dec())
console.log(obj.a)