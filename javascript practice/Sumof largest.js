var a =[1,0,1];
var l1=a[0],l2=a[1];
for(let i=0;i<a.length;i++){
    if(a[i]>l1){

        l1=a[i];
    }
    if(l1===a[i+1]){
        continue;
    }
   if((a[i]>=l2)&&(l1!=a[i])){
       l2=a[i];
    }
    }




console.log(l1,l2);