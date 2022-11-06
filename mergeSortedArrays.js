const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const mergeArrays = (arr1, arr2) => {
  let index1 = 0
  let index2 = 0

  let ans = []
  while(arr1[index1] || arr2[index2]){
    if(arr1[index1] < arr2[index2]){
      ans.push(arr1[index1])
      index1++
    }else{
      ans.push(arr2[index2])
      index2++
    }
  }
  return ans
}


console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


/// time complexity: o(n)
//space: o(n)
