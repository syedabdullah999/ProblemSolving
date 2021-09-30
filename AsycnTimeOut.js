let folks = [ 
    {name: "Bob", age: "32", occupation: "developer"},
    {name: "Bob", age: "23", occupation: "developer"},  
    {name: "Bill", age: "17", occupation: "delinquent"}, 
    {name: "Brad", age: "40", occupation: "yes"} 
  ]

  console.log(folks.find( fella => fella.name === "Bob"))

  console.log(folks.filter( fella => fella.name === "Bob"))