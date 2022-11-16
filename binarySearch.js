const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let ans = -1
  while(left < right){
    // trick to binary search
    let mid = Math.floor(left + (right - left) / 2)

    if(arr[mid] == target){
      debugger
      ans = mid
      break
    }else if(arr[mid] < target){
      left = mid
    }else{
      right = mid
    }
  }
  debugger
  return ans
}

const nums = [-1,0,3,5,9,12]
const target = 9

console.log("binarySearch: ", binarySearch(nums, target))
// Output: 4
// Explanation: 9 exists in nums and its index is 4
