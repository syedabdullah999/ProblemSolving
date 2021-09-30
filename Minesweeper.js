function Minesweeper(input){

///here we have assumed 20 boxes having "11" as the bombs and numbers as the points
let positions = [3,3,3,11,4,5,6,8,5,3,1,11,2,1,3,11,11,2,8,11]
let index = 0
let score =0
for(let a = 0 ; a < input.length ; a++){
    // if(positions.includes(input[a])){
        // index = positions.indexOf(input[a])
        index = input[a]-1
        // console.log(index)
        if(positions[index]=== 11){
            return [score , "Mine Exploded on "+ input[a]] 
        }
        
        score+=positions[index]
        // console.log(score)
        
    // }
}
return [score , "You Won"]



}
///user input provided
let input = [1,6,1,2,4,15,5,7]

let result = Minesweeper(input)

console.log(result)
