// Example 1:

// Input:
//const nums = [1,2,3,1]
// Output: true
// Example 2:

//const nums = [1,2,3,4]
// Output: false
// Example 3:

const nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


const containsDuplicates = (nums) => {
  let bank = {}
  let ans = false
  for(let num of nums){
    if(!bank[num]){
      bank[num] = 1
    }else{
      bank[num] += 1
    }
  }

  for(let [key, val] of Object.entries(bank)){
    if(val > 1){
      ans = true
      break
    }
  }

  return ans
}


// o(n) -- time
// o(n) -- space

console.log("containsDuplicates:" , containsDuplicates(nums))
