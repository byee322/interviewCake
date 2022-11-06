function twoSum(arr, target){
  const set = new Set([...arr])
  let ans = false
  for(let val of set){
    for(let [i, a] of arr.entries()){
      const sum = val + a
      if(sum === target){
        ans = [val, a];
        break;
      }
    }
  }
  return ans
}

console.log(twoSum([2,3,4,3,6,7], 11))
