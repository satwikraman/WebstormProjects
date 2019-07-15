var prime = (a) => {
    for (let i = 2; i <= (a / 2); i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(prime(4));