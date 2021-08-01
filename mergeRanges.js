//// 1. sort array by startTimee
//// 2.loop and merge ranges, starting with 0 to compare
//// 3. compare if the current.startTime is < last.endTime
//// 4. if startTime is < new start time, merge into final and give max endTime

let mergeRanges = (array) => {
  const meetingsCopy = JSON.parse(JSON.stringify(array));


  let arr = meetingsCopy.sort((a, b)=> { return a.startTime > b.startTime })

  let final = [arr[0]]
  for(let i=1; i < arr.length; i++){
    let currentMeeting = arr[i]
    let lastMergedMeeting = final[final.length - 1]

    if(currentMeeting.startTime <= lastMergedMeeting.endTime){
      lastMergedMeeting = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)
    }else {
      final.push(currentMeeting)
    }
  }

  return final
}

console.log(mergeRanges(  [
  { startTime: 10, endTime: 12 },
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 9,  endTime: 10 },
]))


/// time complexity: o(n log n)
/// space complexity o(n)
