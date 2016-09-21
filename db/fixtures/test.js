let fs = require('fs')
var string = fs.readFileSync("db/fixtures/words").toString().toLowerCase().split("\n")
let arrayDone = []
let input = "relda"

for (let idx in string){
  if(input.split("").sort().join("")==string[idx].split("").sort().join("")){
    arrayDone.push(string[idx])
  }
}

console.log(arrayDone)
