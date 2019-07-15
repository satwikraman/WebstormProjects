var a = [1, 0, 1];
function lar() {
    let l1 = a[0], index = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > l1) {
            l1 = a[i];
            index = i;
        }
    }
    a.splice(index, 1);
    return l1;
}
console.log(lar() + lar());

