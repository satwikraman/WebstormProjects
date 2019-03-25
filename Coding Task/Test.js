
var array = [


    {
    "score":16761021,
    "id":"c1dbd109336242e0a64527ba8cffc0bd"
    },
    {
    "score":16755441,
    "id":"57b9ea55db954cbc8f452b34a2ffaaf1"
    },
    {
        "score":null,
        "id":"e8cafaf8cf2b41639422781fbdffa191"
        },
    {
    "score":16774838,
    "id":"9ab7247c02044c65936a467016fff6b6"
    },
    {
    "score":16763774,
    "id":"c51a310f80604ef68a4cb2b83bffcb7e"
    },
    {
        "score":16753041,
        "id":"e8cafaf8cf2b41639422781fbdffa191"
        }
    ]
    //Comparer Function  
    function GetSortOrder(prop) {  
        return function(a, b) {  
            if (a[prop] > b[prop]) {  
                return 1;  
            } else if (a[prop] < b[prop]) {  
                return -1;  
            }  
            return 0;  
        }  
    }  
      
    array.sort(GetSortOrder("score")); //Pass the attribute to be sorted on  
    console.log("Sorted Score : ");  
    var map=new Map();
    
    for (var item in array) {  
        if(array[item].score===undefined){
            console.log(2);
            break;
        }
        map.set(array[item].id,array[item].score);
      document.write(  map.get(array[item].id));
    };
