function olddata(str){
let array = [];
let b= str.split(" ").join("")
for(let a = 0 ; a < b.length ; a++){
    if(isNaN(b[a])){
        array=[];
    }
    else{
        array+=b[a]
        if(array.length===6){
            break
        }
    }
}
if(array.length<6){
    array=[]
}
    return array
}


let str = "897040 Ahmed Ali 1999"
let result = olddata(str)

if(result.length>0)
console.log("Unique 6 digits are : ",result)

else{
    console.log("No Unique 6 Digits")
}