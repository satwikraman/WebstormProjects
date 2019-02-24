function par(...args){
    console.log(args);
    console.log(...args)
}
par(1,5,6,3,85,56,2,5);
/*
output:
[ 1, 5, 6, 3, 85, 56, 2, 5 ]
1 5 6 3 85 56 2 5
 */