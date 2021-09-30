function Jolly(arr)
{

    let newArray = new Array(arr.length).fill(false);
 

    for(let i = 0; i < arr.length - 1; i++)
    {

        let d = Math.abs(arr[i] - arr[i + 1]);

        if (d == 0 || d > arr.length - 1 || newArray[d] == true)
            return "not jolly";

            newArray[d] = true;
    }
    return "jolly";
}

let arr = [ 11, 7, 4, 2, 1, 6 ];
 
let result = Jolly(arr)
console.log(result)