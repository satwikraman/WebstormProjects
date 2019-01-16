var a =[1,0,1]  ;
var l1=a[0],l2=a[1];
for(var i in a){
    if(a[i]>=l1){

        l1=a[i];
    }
    else if((a[i]>=l2)&&(l1>=12)){
        l2=a[i];
    }



}
console.log(l2);