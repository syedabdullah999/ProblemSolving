// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// console.log(arr1)
// arr2.push(33);
// console.log(arr2)
// console.log(arr1)
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

////////////////////////////////////////////////////////////////////////////////////////////////


// console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));


////////////////////////////////////////////////////////////////////////////////////////////////


// (function(x) {
//     return (function(y) {
//         console.log(y,x);
//     })(2)
// })(1);


////////////////////////////////////////////////////////////////////////////////////////////////

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());


////////////////////////////////////////////////////////////////////////////////////////////////


// var length = 10;
// console.log(length.length)
// function fn() {
// 	console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function(fn) {
//     fn();
//     arguments[0]();
//   }
// };

// obj.method(fn, 1);


////////////////////////////////////////////////////////////////////////////////////////////////


// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1
//         var y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();


////////////////////////////////////////////////////////////////////////////////////////////////


// for (let i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//     console.log(i)
//   }


///////////////////////////////

((a) => {
    if(isNaN(a) === true){
        console.log("Not A Number")
    }
    else{
    console.log("Is Number")}
})("a")