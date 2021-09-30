function NumberSystem(array){
let stringArray = []
let newArray =[]
for(let a = 0 ; a < array.length ; a ++){
    ///converting the input array to the different array of objects
    stringArray[a] = array[a].split(/(\s+)/);
    /// removing spacing in between the array
    stringArray[a] = stringArray[a].filter((item) => item != ' ');
        if(stringArray[a][1]==2 && stringArray[a][2]){
           newArray.push(Number(stringArray[a][2]).toString(2));
        //    console.log(newArray)
        }
        else if(stringArray[a][1]==8){
            newArray.push(Number(stringArray[a][2]).toString(8));
        //    console.log(newArray)
        }
        else if(stringArray[a][1]==10){
            // newArray.push(Number(stringArray[a][2]).toString(10));
            let newItem = parseInt(stringArray[a][2],8)
            newArray.push(parseInt(newItem,10))
        //    console.log(newArray)
        }
}
return newArray
}
let str = "10 2 101\n10 8 98\n8 10 142"
/// converting my string into array of strings
var array = str.split(/\r?\n/);
let result = NumberSystem(array)
console.log(result)