function foo() {
    const secret = Math.trunc(Math.random()*100)
    return function inner() {
        let a = 19;
      console.log(`The secret number is ${secret}.`)
      return a
    }
  }
  const f = new foo() // `secret` is not directly accessible from outside `foo`
  console.log(f())