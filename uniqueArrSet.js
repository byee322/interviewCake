var data = [
  {state: "CA", total: 23},
  {state: "CA", total: 25},
  {state: "IL", total: 26},
  {state: "MI", total: 3},
  {state: "al", total: 15},
  {state: "AZ", total: 200},
  {state: "AZ", total: 10},
];

let ans = new Set()
let anserArr = []
for(let [i, obj] of data.entries()){
  if(!ans.has(obj.state)){
    ans.add(obj.state)
    anserArr.push(obj)
  }
}

console.log(anserArr)
