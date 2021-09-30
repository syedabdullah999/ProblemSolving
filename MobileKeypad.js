function Keypad(str){
let obj = {}
str = str.toLowerCase()
let num ={
    2 : "abc",
    3 : "def",
    4 : "ghi",
    5 : "jkl",
    6 : "mno",
    7 : "pqrs",
    8 : "tuv",
    9 : 'wxyz',
    0 : " "
}

let a = Object.values(num)

console.log("Keypad Layout "+ a)
console.log(str)
    
    
    let key2 = 0
    let value2 = ""
    
    for(let b = 0 ; b < str.length ; b++){
        for (let [key, value]of Object.entries(num)) {
            // console.log(value)
            if(value.includes(str[b])){
            
            value2 = value.indexOf(str[b])+1
            obj[ key ] = value;
            console.log(" ( "+key+" , ",value2+" ) ")
            
            // key2 = Object.keys(key)
        // console.log(key)
        // value2 = element.indexOf(str[b])+1
        // console.log(value)
        break
    }
}
}

return "success"
}
        

let str = "this is a message Hello"

let result = Keypad(str)

console.log(result)