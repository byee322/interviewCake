// find highest traffic days of 7
// days with highest and lowest unique views
// days with highest and lowest page views

const daysAndTraffic = {
  '01-01-2020': {
    'ios': { unique: 123, pageviews: 456 },
    'android': { unique: 345, pageviews: 789 }
  },
  '01-02-2020': {
    'ios': { unique: 1234, pageviews: 4567 },
    'android': { unique: 3456, pageviews: 2789 }
  },
  '01-03-2020': {
    'ios': { unique: 1230, pageviews: 4560 },
    'android': { unique: 3452, pageviews: 5781 }
  },
  '01-04-2020': {
    'ios': { unique: 2130, pageviews: 450 },
    'android': { unique: 342, pageviews: 781 }
  },
  '01-05-2020': {
    'ios': { unique: 120, pageviews: 4160 },
    'android': { unique: 52, pageviews: 781 }
  },
  '01-06-2020': {
    'ios': { unique: 30, pageviews: 460 },
    'android': { unique: 2452, pageviews: 1781 }
  },
  '01-07-2020': {
    'ios': { unique: 130, pageviews: 2500 },
    'android': { unique: 1452, pageviews: 8781 }
  },
  '01-08-2020': {
    'ios': { unique: 930, pageviews: 450 },
    'android': { unique: 3452, pageviews: 4781 }
  },
  '01-09-2020': {
    'ios': { unique: 2000, pageviews: 950 },
    'android': { unique: 1452, pageviews: 5711 }
  },
  '01-10-2020': {
    'ios': { unique: 1130, pageviews: 25000 },
    'android': { unique: 2000, pageviews: 1711 }
  }
}

// const findHighesTrafficDay = (days, type) => {
//   let highestTraffic = 0
//   let highestTrafficI = 0

//   let daysArr = Object.keys(days)

//   for(let i=0; i < daysArr.length; i++){
//     let day = days[daysArr[i]]

//     let iosAmount = day["ios"][type]
//     let androidAmount = day["android"][type]

//     let total = iosAmount + androidAmount

//     if(total > highestTraffic){
//       highestTraffic = total
//       highestTrafficI = i
//     }
//   }

//   return daysArr[highestTrafficI]
// }

const findHighesTrafficDay = (obj, type) => {
  let highestTrafficDay = 0
  let highestTrafficTotal = 0

  console.log(Object.keys(obj))
  for(let i=0; i < Object.keys(obj).length; i++){
    let androidTotal = obj[Object.keys(obj)[i]]["android"][type]
    let iosTotal = obj[Object.keys(obj)[i]]["ios"][type]

    if(highestTrafficTotal < (androidTotal + iosTotal)){
      highestTrafficDay = Object.keys(obj)[i]
      highestTrafficTotal = androidTotal + iosTotal
    }
  }

  console.log(highestTrafficDay)
  return obj[highestTrafficDay]
}

console.log("findHighesTrafficDay(unique): ", findHighesTrafficDay(daysAndTraffic, "unique"))
console.log("findHighesTrafficDay(pageViews): ", findHighesTrafficDay(daysAndTraffic, "pageviews"))

// const findLowestTrafficDay = (days, type) => {
//   let daysArr = Object.keys(days)
//   let lowestTraffic = days[daysArr[0]]["ios"][type] + days[daysArr[0]]["android"][type]
//   let lowestTrafficI = 0

//   for(let i=0; i < daysArr.length; i++){
//     let day = days[daysArr[i]]

//     let iosAmount = day["ios"][type]
//     let androidAmount = day["android"][type]

//     let total = iosAmount + androidAmount

//     if(total < lowestTraffic){
//       lowestTraffic = total
//       lowestTrafficI = i
//     }
//   }

//   return daysArr[lowestTrafficI]
// }

const findLowestTrafficDay = (obj, type) => {

  let lowestTrafficTypeTotal = obj[Object.keys(obj)[0]]["android"][type] + obj[Object.keys(obj)[0]]["ios"][type]
  let lowestDay = 0

  for(let i=0; i < Object.keys(obj).length; i++){
    let total = obj[Object.keys(obj)[i]]["android"][type] + obj[Object.keys(obj)[i]]["ios"][type]
    if(total < lowestTrafficTypeTotal){
      lowestTrafficTypeTotal = total
      lowestDay = Object.keys(obj)[i]
    }
  }
  console.log(lowestDay)
  return obj[lowestDay]
}

console.log("findLowestTrafficDay(unique): ", findLowestTrafficDay(daysAndTraffic, "unique"))
console.log("findLowestTrafficDay(pageviews): ", findLowestTrafficDay(daysAndTraffic, "pageviews"))

// const findMostActiveWeek = (days, type) => {
//   let daysArr = Object.keys(days)
//   let highestTraffic = 0
//   let highestTrafficI = 0

//   const getTotalForWeek = (mobileType, type, i) => {
//     let total = 0
//     let daysSliced = daysArr.slice(i, i+7)
//     total = daysSliced.reduce((agg, day)=>{
//       return agg + days[day][mobileType][type]
//     }, 0)
//     return total
//   }

//   for(let i=0; (i + 6) < daysArr.length; i++){

//     let day = days[daysArr[i]]

//     let iosAmount = getTotalForWeek("ios", type, i)
//     let androidAmount = getTotalForWeek("android", type, i)

//     let total = iosAmount + androidAmount
//     console.log("i: ", i)
//     console.log("total: ", total)
//     if(total > highestTraffic){
//       highestTraffic = total
//       highestTrafficI = i
//     }
//   }

//   return `${daysArr[highestTrafficI]} - ${daysArr[highestTrafficI + 7]}`
// }

const findMostActiveDays = (obj, type, days) => {

  let dates = Object.keys(obj)
  let highestTrafficDaysTotal = 0
  let highestTrafficDayI = 0

  const getTotalForDays = (startingDay) => {
    let total = 0
    for(let i=startingDay; i < (startingDay + days); i++){
      if(obj[dates[i]]){
        let day = obj[dates[i]]
        total += day["android"][type] + day["ios"][type]
      }
    }

    return total
  }

  for(let i=0; i < dates.length; i++){
    let total = getTotalForDays(i, dates)
    // console.log("dates[i]:", dates[i])
    // console.log("total:", total)

    if(total > highestTrafficDaysTotal){
      highestTrafficDaysTotal = total
      highestTrafficDayI = i
    }
  }

  return `${dates[highestTrafficDayI]} - ${dates[highestTrafficDayI + days - 1]}`

}

console.log("findMostActiveDays(unique): ", findMostActiveDays(daysAndTraffic, "unique", 1))
console.log("findMostActiveDays(pageviews): ", findMostActiveDays(daysAndTraffic, "pageviews", 1))


