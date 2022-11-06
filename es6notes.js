const arr = ["a", "b", "c"]

for (let [i,elem] of arr.entries()) {
   console.log(`index: ${i}, elem: ${elem}`);
}

var map = new Map();
map.set("key1","Val 1");
map.set(2,2);

for(let [key, val] of map){
   console.log(`key: ${key}, val: ${val}`)
}

