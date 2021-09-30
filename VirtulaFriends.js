let friends={}
let stringArray = []
let newArray =[]
// friends[ "Fred" ] = 2;
// console.log(friends)
function VirtualFriends(str){
    let arr = str.split(' ');
for(let a=0 ; a<arr.length ; a+++a++){
    for(b=a;b<a+2;b++){
        if(newArray.indexOf(arr[b]) <= -1){
            newArray.push(arr[b])
        }
    }
    console.log(newArray.length)
}
console.log(newArray)
console.log(arr)
}
let str = "Fred Barney Barney Betty Betty Wilma"
let result = VirtualFriends(str)
console.log(result)