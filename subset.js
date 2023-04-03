const nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// const findSubSets = (nums) => {
//   let res = [[]],
//           curr;

//   for(let num of nums) {
//       curr = res.map(x => [...x, num]);
//       res = [...res, ...curr];
//   }

//   return res;
// }
const findSubSets = () => {
  let res = [[]],
      curr;

  for(let num of nums){
    curr = res.map(x => [...x, num])
    res = [...res, ...curr]
  }

  return res
}

console.log("findSubSets:", findSubSets(nums))
