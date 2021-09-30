function Snowflake(arr){
let newArray = []
let array2 =[]
let index = 0
    for(let a = 0 ; a < arr.length ; a++){          
        if(!newArray.includes(arr[a])){
            newArray.push(arr[a])
        }
        else {
            array2.push(arr[a])
        }


    }
    array2.forEach(element => {
        index = newArray.indexOf(element)
        console.log(index)
        if(index >0){
            newArray.splice(index,1)
        } 
    });
    
    // console.log(array2)
console.log(newArray)
return newArray.length
}

let str = "1 5 1 2 3 2 1"

let arr = str.split(' ');

let result = Snowflake(arr)

console.log(result)