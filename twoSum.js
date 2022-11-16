// function twoSum(arr, target){
//   const set = new Set([...arr])
//   let ans = false
//   for(let val of set){
//     for(let [i, a] of arr.entries()){
//       const sum = val + a
//       if(sum === target){
//         ans = [val, a];
//         break;
//       }
//     }
//   }
//   return ans
// }

// console.log(twoSum([2,3,4,3,6,7], 11))


// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// function twoSum(arr, value){
//   const set = new Set([...arr])
//   let ans = false
//   for(let val of set){
//     for(let val2 of arr){
//       if(val === val2){
//         continue
//       }else{
//         let sum = val + val2
//         if (sum == value){
//           ans = [val, val2]
//           break
//         }
//       }
//     }
//   }
//   if(ans){
//     console.log(arr.indexOf(ans[0]))
//     console.log(arr.indexOf(ans[1]))
//   }

//   return ans
// }

function twoSum(arr, value){
  let left = 0
  let right = 1
  let ans = false
  while(left != arr.length - 1){
    debugger
    let sum = arr[left] + arr[right]


    if(arr[left] == arr[right]){
      right += 1
    }else if(sum == value){
      ans = [arr[left], arr[right]]
      break
    }else {
      right += 1
    }

    if(right == arr.length){
      left += 1
      right = left
    }
  }

  return ans
}

console.log(twoSum([2,3,4,3,6,7], 11))
