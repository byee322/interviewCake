function maxProfit(prices){
  let maxProfit = 0
  let left = 0
  let right = 1

  while(left < prices.length){
    let start = prices[left]
    let profit = prices[right] - start

    if(prices[right] > prices[left]){
      maxProfit = Math.max(maxProfit, profit)
    }

    right += 1

    if(right == prices.length){
      left += 1
      right = left
    }
  }

  return maxProfit
}

const prices = [7,1,5,3,6,4]
console.log("maxProfit: ", maxProfit(prices))

// Input: prices = [7,1,5,3,6,4]
// Output: 5
