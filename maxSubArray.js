//const a = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// const a = [1]
// Output: 1

const a = [5,4,-1,7,8]
// Output: 23

const maxSubArray = (arr) => {
  let maxSum = 0
  let increaseLeft = true

  let left = 0
  let right = arr.length

  while(left < right){

    let sum = arr.slice(left, right).reduce((curr, agg)=>{
      return agg + curr
    }, 0)

    maxSum = Math.max(maxSum, sum)

    if(increaseLeft){
      left += 1
      increaseLeft = false
    }else{
      right -= 1
      increaseLeft = true
    }
  }

  return maxSum
}

console.log("maxSubArray:", maxSubArray(a))
