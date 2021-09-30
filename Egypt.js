function Egypt(str){
let a = 0
let b = 0
for(a=0;a<str.length;a++){

    a= str[2]*str[2]
    b=(str[0]*str[0])+(str[1]*str[1])

    if(a===b){
        return "right"
    }
    return "wrong"
}

}

let str = [6,8,11]

let result = Egypt(str)

console.log(result)