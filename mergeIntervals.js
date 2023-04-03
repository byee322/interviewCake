const intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

const mergeIntervals = (intervals) => {
  let bank = []

  let left = intervals[0][0]
  let right = intervals[0][1]

  for(let i=1; i < intervals.length; i++){
    let low = intervals[i][0]
    let high = intervals[i][1]

    if(low < right){
      right = Math.max(high, right)
      bank.push([left, right])
    }else{
      bank.push(intervals[i])
    }
  }
  return bank
}

console.log("mergeIntervals: ", mergeIntervals(intervals))
