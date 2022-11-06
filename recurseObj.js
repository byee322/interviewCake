//Write a function that searches for a value in a nested object and returns true if the object contains that value and false otherwise.
var obj = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(obj, val){
    //write your code here
  let newMap = new Map(Object.entries(obj))
  let test = false;
  if(obj == val) return true
  for(let [key, value] of newMap.entries()){
      contains(value, val);
  }

  return test
}

console.log(contains(obj, 44)); // true
console.log(contains(obj, "foo")); // false
